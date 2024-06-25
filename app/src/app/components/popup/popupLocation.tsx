import React, { useState, useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { AiOutlinePushpin } from "react-icons/ai";
import { LiaSearchSolid } from "react-icons/lia";
import axios from "axios";
import { Pane, Dialog } from "evergreen-ui";

const PopupLocation: React.FC = () => {
  const [isMapOpen, setMapOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [fetchingCurrentLocation, setFetchingCurrentLocation] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<string>("");

  // Track selected suggestion
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const apiBaseUrl = "http://localhost:4000/api/google-maps/places";

  const openMap = () => setMapOpen(true);
  const closeMap = () => setMapOpen(false);

  const fetchSuggestions = async () => {
    try {
      if (!address) return;

      const response = await axios.get(`${apiBaseUrl}?input=${encodeURIComponent(address)}`);
      setSuggestions(response.data.predictions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSearch = () => {
    fetchSuggestions();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddress(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchSuggestions();
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setFetchingCurrentLocation(true);
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get(`http://localhost:4000/api/reverse-geocode?lat=${latitude}&lng=${longitude}`);
            setCurrentAddress(response.data.address); // Assuming the backend returns an 'address' field
          } catch (error) {
            console.error("Error fetching current address:", error);
          }

          setFetchingCurrentLocation(false);
        },
        error => {
          console.error("Error getting current location:", error);
          setFetchingCurrentLocation(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Handle click on suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
    setCurrentAddress(suggestion); // Update currentAddress with selected suggestion
    setMapOpen(false); // Close the map dialog if open
  };

  return (
    <div className="flex items-center cursor-pointer">
      <Pane>
        <Dialog
          isShown={isMapOpen}
          title="Address for your order"
          onCloseComplete={closeMap}
          hasFooter={false}
          minHeightContent={350}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex-grow mb-5">
              <div className="flex relative h-full">
                <input
                  className="h-[45px] w-full bg-[#f5f5f5] rounded-[5px] outline-none border border-[#f2f2f2] px-2 text-[#2144e1] font-medium placeholder:font-normal"
                  type="text"
                  name="address"
                  placeholder="Search for address or zip code"
                  value={address}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <div
                  className="absolute right-2 bottom-0 top-0 my-auto cursor-pointer text-[#2144e1] flex items-center"
                  onClick={handleSearch}
                >
                  <LiaSearchSolid className="text-[25px]" />
                </div>
              </div>
            </div>
            <div className="h-[250px] overflow-y-auto mb-5">
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="h-[65px] hover:bg-slate-200 flex flex-col justify-center cursor-pointer pl-2 my-1"
                    onClick={() => handleSuggestionClick(suggestion.description)}
                  >
                    <span className="block text-[14px]">
                      {suggestion.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button 
              className={`flex h-[45px] w-full bg-[#2144e1] text-white justify-center items-center rounded-[5px] text-[16px] font-medium mb-5 ${fetchingCurrentLocation ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={getCurrentLocation}
              disabled={fetchingCurrentLocation}
            >
              <GrLocation className="text-[15px] mr-1" />
              Use current location
            </button>
          </div>
        </Dialog>
        <span
          onClick={openMap}
          className="flex items-center text-base font-medium text-black cursor-pointer"
        >
          <AiOutlinePushpin className="h-5 w-5" />
          <span className="ml-1 cursor-pointer">
            {selectedSuggestion || currentAddress || "Search your location"}
          </span>
        </span>
      </Pane>
    </div>
  );
};

export default PopupLocation;
