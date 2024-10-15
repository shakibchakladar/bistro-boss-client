import img from "../../../assets/home/chef-service.jpg";

const CefService = () => {
  return (
    <div
      className=" h-[550px] w-[1250px] mx-auto hero my-8"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-[#FFFFFF] w-[800px] h-[400px]"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-[#151515]">Bistro Boss</h1>
          <p className="mb- text-[#151515]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default CefService;
