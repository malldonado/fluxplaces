import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";
import requestIp from "request-ip";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI as string;
const googleMapsApiKey = process.env.YOUR_GOOGLE_MAPS_API_KEY as string;

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestIp.mw());

// CORS Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// MongoDB connection
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err: any) => console.error("MongoDB connection error:", err));

// Endpoint to fetch places suggestions from Google Maps Places API
app.get("/api/google-maps/places", async (req: Request, res: Response) => {
  const { input } = req.query;

  if (!input) {
    return res.status(400).json({ error: "Input parameter is required" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      input as string
    )}&key=${googleMapsApiKey}&components=country:br`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from Google Maps API:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from Google Maps API" });
  }
});

// Endpoint to fetch user location based on IP (using ipinfo.io for demonstration)
app.get("/api/user-location", async (req: Request, res: Response) => {
  try {
    const ip = req.clientIp; // Using clientIp from request-ip
    if (!ip) {
      throw new Error("IP address not found in the request");
    }

    // Simulate fetching location based on IP for demonstration
    const response = await axios.get(`https://ipinfo.io/${ip}/json`);
    const { loc } = response.data;
    if (!loc) {
      throw new Error("Location data not found");
    }

    const [latitude, longitude] = loc.split(",");
    res.json({ latitude, longitude });
  } catch (error) {
    console.error("Error fetching user location:", error);
    res.status(500).json({ error: "Failed to fetch user location" });
  }
});

// Endpoint to perform reverse geocoding (latitude and longitude to address)
app.get("/api/reverse-geocode", async (req: Request, res: Response) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleMapsApiKey}`;

    const response = await axios.get(url);
    const { results } = response.data;

    if (results && results.length > 0) {
      const address = results[0].formatted_address;
      res.json({ address });
    } else {
      throw new Error("No results found");
    }
  } catch (error) {
    console.error("Error fetching address from coordinates:", error);
    res.status(500).json({ error: "Failed to fetch address from coordinates" });
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
