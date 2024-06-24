import React from "react";
import Image from 'next/image';

const slideImages = [
    { image: "7.svg", title: 'Automotive' },
    { image: "8.svg", title: 'Babies & Kids' },
    { image: "2.svg", title: 'Beauty & Personal Care' },
    { image: "6.svg", title: 'Books & Office Supplies' },
    { image: "3.svg", title: 'Electronics' },
    { image: "1.svg", title: 'Fashion' },
    { image: "10.svg", title: 'Health' },
    { image: "5.svg", title: 'Home & Decoration' },
    { image: "12.svg", title: 'Hobbies & Collectibles' },
    { image: "9.svg", title: 'Pet Shop' },
    { image: "4.svg", title: 'Sports & Leisure' },
    { image: "11.svg", title: 'Tools & Construction' },
];

const Categories: React.FC = () => {
  return (
    <div className="relative max-w-7xl px-12 mx-auto w-full mt-20">
      <div className="flex w-full mb-10">
        <h2 className="font-bold text-[30px]">Categories</h2>
      </div>
      <div className="slide-container">
        <div className="slide-grid grid grid-cols-6 gap-6">
          {slideImages.map((slide, index) => (
            <div key={index} className="w-full cursor-pointer">
              <Image src={`/img/icons/${slide.image}`} alt={slide.title} width={100} height={100} className="w-full h-auto px-4" />
              <p className="text-black font-bold text-sm text-center mt-4">{slide.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
