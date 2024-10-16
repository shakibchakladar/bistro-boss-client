import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecomends = () => {
  return (
    <div>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      />

      <div className="grid md:grid-cols-3 w-[1150px] mx-auto my-6 gap-10">
        <div className="border border-yellow-500 shadow-xl card bg-base-100 w-96">
          <figure className="px-10 pt-10">
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-[#E8E8E8] text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="border border-yellow-500 shadow-xl card bg-base-100 w-96">
          <figure className="px-10 pt-10">
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-[#E8E8E8] text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="border border-yellow-500 shadow-xl card bg-base-100 w-96">
          <figure className="px-10 pt-10">
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-[#E8E8E8] text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomends;
