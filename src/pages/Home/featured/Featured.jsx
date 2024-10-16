import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      className="w-[1150px] mx-auto mb-7 bg-fixed"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="items-center justify-center gap-5 my-5 space-y-3 md:flex">
        <img className="w-full h-auto md:w-[600px]" src={featuredImg} alt="" />

        <div className="p-5 mx-4 space-y-8 text-white bg-black bg-opacity-50">
          <h3 className="text-[#FFFFFF]">October 15,2024</h3>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quas
            maiores aperiam consequatur non laboriosam. Autem, eius doloribus,
            repudiandae voluptatum ipsam a quo cum consequatur, facilis non
            eveniet sit inventore?
          </p>
          <button className="text-[#FFFFFF] text-center border-b border-red-50 rounded-md p-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
