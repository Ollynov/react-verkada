import { useEffect, useState } from "react";
import image1 from "./../Images/verkada1.png";
import image2 from "./../Images/verkada2.png";
import image3 from "./../Images/verkada3.png";

const ImageVariation1 = () => {
  return (
    <>
      <img
        src={image1}
        className="absolute mt-[60px] rounded-lg z-10"
        alt="Carousel 1"
      />
      <img
        src={image2}
        className="absolute bottom-0 right-[41px] rounded-lg opacity-30"
        alt="Carousel 2"
      />{" "}
      <img
        src={image3}
        className="absolute top-0 right-0 rounded-lg opacity-30"
        alt="Carousel 3"
      />
    </>
  );
};
const ImageVariation2 = () => {
  return (
    <>
      <img
        src={image2}
        className="absolute mt-[60px] rounded-lg z-10"
        alt="Carousel 1"
      />
      <img
        src={image1}
        className="absolute bottom-0 right-[41px] rounded-lg opacity-30"
        alt="Carousel 2"
      />{" "}
      <img
        src={image3}
        className="absolute top-0 right-0 rounded-lg opacity-30"
        alt="Carousel 3"
      />
    </>
  );
};
const ImageVariation3 = () => {
  return (
    <>
      <img
        src={image3}
        className="absolute mt-[60px] rounded-lg z-10"
        alt="Carousel 1"
      />
      <img
        src={image2}
        className="absolute bottom-0 right-[41px] rounded-lg opacity-30"
        alt="Carousel 2"
      />{" "}
      <img
        src={image1}
        className="absolute top-0 right-0 rounded-lg opacity-30"
        alt="Carousel 3"
      />
    </>
  );
};

const Carousel = () => {
  const [position, setPosition] = useState(1);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPosition(position < 3 ? position + 1 : 1);
    }, [3000]);
  }, []);

  return (
    <div className="w-[518px] bg-green-700 h-full relative">
      {position === 1 && <ImageVariation1 />}
      {position === 2 && <ImageVariation2 />}
      {position === 3 && <ImageVariation3 />}
    </div>
  );
};

export default Carousel;
