import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import CefService from "./cefservice/CefService";
import ChefRecomends from "./ChefRecomends/ChefRecomends";
import Featured from "./featured/Featured";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category/>
      <CefService/>
      <PopularMenu/>
      <CallUs/>
      <ChefRecomends/>
      <Featured/>
      <Testimonials/>
    </div>
  );
};

export default Home;
