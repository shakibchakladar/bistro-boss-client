import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import MenuItem from "../../shared/menuItem/MenuItem";
import dessertImg from'../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from'../../../assets/menu/pizza-bg.jpg'
import saladImg from'../../../assets/menu/salad-bg.jpg'
import soupImg from'../../../assets/menu/soup-bg.jpg'

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salads = menu?.filter((item) => item.category === "salad");
  const soups = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro boss|menu </title>
      </Helmet>
      <Cover
        coverImg={coverImg}
        coverTitle={"OUR MENU"}
        coverDescription={"Would you like to try a dish?"}
      />

      <SectionTitle heading={"TODAYS OFFER"} subHeading={"---Dont miss---"} />
      <div className="grid items-center justify-center gap-4 m-4 space-y-6 md:grid-cols-2">
        {offered?.map((item) => (
          <MenuItem key={item?._id} item={item} />
        ))}
      </div>
      <Cover
        coverImg={dessertImg}
        coverTitle={"DESSERTS"}
        coverDescription={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid items-center justify-center gap-4 m-4 space-y-6 md:grid-cols-2">
        {dessert?.map((item) => (
          <MenuItem key={item?._id} item={item} />
        ))}
      </div>
      <Cover
        coverImg={pizzaImg}
        coverTitle={"PIZZA"}
        coverDescription={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid items-center justify-center gap-4 m-4 space-y-6 md:grid-cols-2">
        {pizza?.map((item) => (
          <MenuItem key={item?._id} item={item} />
        ))}
      </div>
      <Cover
        coverImg={saladImg}
        coverTitle={"SALADS"}
        coverDescription={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid items-center justify-center gap-4 m-4 space-y-6 md:grid-cols-2">
        {salads?.map((item) => (
          <MenuItem key={item?._id} item={item} />
        ))}
      </div>
      <Cover
        coverImg={soupImg}
        coverTitle={"SOUPS"}
        coverDescription={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid items-center justify-center gap-4 m-4 space-y-6 md:grid-cols-2">
        {soups?.map((item) => (
          <MenuItem key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
