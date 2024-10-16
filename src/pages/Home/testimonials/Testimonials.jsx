// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { useEffect, useState } from "react";
// import { FaRegStar } from "react-icons/fa6";


// const Testimonials = () => {
//   const [reviews, SetReviews] = useState([]);
//   useEffect(() => {
//     fetch("reviews.json")
//       .then((res) => res.json())
//       .then((data) => SetReviews(data));
//   }, []);
//   return (
//     <div>
//       <SectionTitle
//         heading={"TESTIMONIALS"}
//         subHeading={"---What Our Clients Say---"}
//       />
//       {/* <h2>reviews:{reviews?.length}</h2> */}
      


//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         {reviews?.map((review) => (
//           <SwiperSlide key={review?._id} review={review}>
//             <div className="px-10 mx-8 my-4 space-y-5 text-center p-9">
//             <FaRegStar values={review?.rating} />
//             <p className="text-xl text-slate-50">{review?.details}</p>
//             <h3 className="text-3xl text-[#CD9003]">{review?.name}</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;


import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa6";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaRegStar key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"} />
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="px-10 mx-8 my-4 space-y-5 text-center p-9">
              <div className="flex justify-center">{renderStars(review?.rating)}</div>
              <p className="text-xl text-slate-50">{review?.details}</p>
              <h3 className="text-3xl text-[#CD9003]">{review?.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
