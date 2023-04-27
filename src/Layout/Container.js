const Circle = () => {
  return (
    <svg
      width="164px"
      height="164px"
      className="absolute left-[149px] top-[-61px]"
    >
      <circle
        cx="82"
        cy="82"
        r="66"
        stroke="#FF9900"
        opacity=".1"
        stroke-width="30"
        fill="none"
      />
    </svg>
  );
};

function Container({ children }) {
  return (
    <main>
      <Circle />
      <div
        id="main-content"
        className="bg-green-200 w-full my-28  xl:w-[1176px] xl:mx-auto 2xl:ml-[240px] xl:mt-[197px] h-[1060px] lg:h-[530px] flex flex-col lg:flex-row justify-between"
      >
        {children}
      </div>
    </main>
  );
}

export default Container;

// 504
