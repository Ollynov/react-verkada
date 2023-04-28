import image1 from "./../Images/verkada1.png";
import image2 from "./../Images/verkada2.png";
import image3 from "./../Images/verkada3.png";
import image4 from "./../Images/verkada4.png";
import image5 from "./../Images/verkada5.png";

export const ImageVariation1 = () => {
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
export const ImageVariation2 = () => {
  return (
    <>
      <img
        src={image2}
        className="absolute mt-[160px] rounded-lg z-20"
        alt="Carousel 1"
      />
      <img
        src={image4}
        className="absolute bottom-0 right-[99px] rounded-lg   z-10"
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
export const ImageVariation3 = () => {
  return (
    <>
      <img
        src={image3}
        className="absolute mt-[60px] rounded-lg z-20"
        alt="Carousel 1"
      />
      <img
        src={image5}
        className="absolute bottom-0 right-[41px] rounded-lg z-10"
        alt="Carousel 2"
      />{" "}
      <img
        src={image2}
        className="absolute top-0 right-0 rounded-lg opacity-30"
        alt="Carousel 3"
      />
    </>
  );
};
