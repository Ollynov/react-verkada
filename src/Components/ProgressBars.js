export const ProgressActive = ({ value }) => {
  value = 100 - (value / 4000) * 100;
  return (
    <div className="flex flex-col flex-nowrap justify-end w-1 h-6 rounded-full overflow-hidden">
      <div
        className="bg-[#FF9900] overflow-hidden rounded-lg"
        role="progressbar"
        style={{ height: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="10"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
export const ProgressNextUp = ({ value }) => {
  value = 100 - (value / 4000) * 100;
  return (
    <div className="flex flex-col flex-nowrap justify-end w-1 h-6 rounded-full overflow-hidden">
      <div
        className="bg-[#C4C4C4] overflow-hidden rounded-lg"
        role="progressbar"
        style={{ height: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="10"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
export const ProgressInactive = () => {
  const value = 20;
  return (
    <div className="flex flex-col flex-nowrap justify-end w-1 h-6 rounded-full overflow-hidden">
      <div
        className="bg-[#C4C4C4] overflow-hidden rounded-lg"
        role="progressbar"
        style={{ height: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="10"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
