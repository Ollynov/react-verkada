import { ChevronRight } from "./../Icons/Arrows";

const StandardButton = ({ text }) => {
  return (
    <button className="text-white bg-[#FF9900] hover:bg-[#DE8500] w-[161px] h-[48px]  rounded-3xl font-bold flex flex-row justify-center text-center">
      <span className="self-center">{text}</span>
      <span className="self-center ml-1.5">
        <ChevronRight />
      </span>
    </button>
  );
};

export default StandardButton;
