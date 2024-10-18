import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {

  const [menu]=useMenu()
  const popularMenu=menu.filter(item=>item.category==='popular')

  return (
    <div className="m-2 mb-7 w-[1150px mx-auto]">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
     <div className="grid items-center justify-center gap-4 m-4 space-y-6 md:grid-cols-2">
        {popularMenu?.map(item=><MenuItem key={item?._id} item={item}/>)}
     </div>
    </div>
  );
};

export default PopularMenu;
