const Cover = ({coverImg,coverTitle,coverDescription}) => {
  return (
    <div
      className="min-h-[650px] hero"
      style={{
        backgroundImage:
          `url(${coverImg})`,
      }}
    >
      <div className="text-center hero-content text-neutral-content">
        <div className="p-5 bg-black w-[1000px] h-[300px] opacity-60 items-center justify-center flex flex-col">
          <h1 className="mb-5 text-5xl font-bold">{coverTitle}</h1>
          <p className="mb-5">
           {coverDescription}
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Cover;
