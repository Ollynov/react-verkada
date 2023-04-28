import StandardButton from "./StandardButton";

const Hero = () => {
  return (
    <div className="w-[416px] h-full pt-12 lg:pt-[104px]">
      <div className="mb-4 text-sm text-[#929A9F] uppercase">
        Lorem ipsum dolor
      </div>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet, est mollis evertitur ut
      </h1>
      <p className="text-base text-[#929A9F] mt-4 mb-9">
        Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam
        quaeque ad sed, an legere concludaturque eum. Duo omnis solet dissentiet
        te, ea sed quis erat reprehendunt, cetero consetetur philosophia mel in.{" "}
      </p>
      <StandardButton text="Learn More" />
    </div>
  );
};

export default Hero;
