import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CefService from "./cefservice/CefService";
import PopularMenu from "./popularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category/>
      <CefService/>
      <PopularMenu/>
    </div>
  );
};

export default Home;
