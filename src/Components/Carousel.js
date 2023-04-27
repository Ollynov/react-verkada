import image1 from "./../Images/verkada1.png";
import image2 from "./../Images/verkada2.png";
import image3 from "./../Images/verkada3.png";

const Carousel = () => {
  return (
    <div className="w-[518px] bg-green-700 h-full relative">
      <img src={image1} className="mt-[60px] fixed rounded-lg" alt="logo" />
      <img
        src={image2}
        className="absolute bottom-0 right-[41px] rounded-lg"
        alt="logo"
      />{" "}
      <img
        src={image3}
        className="absolute top-0 right-0 rounded-lg"
        alt="logo"
      />
    </div>
  );
};

export default Carousel;
