import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data.filter(item=>item.category==='popular')))
  }, []);
  return (
    <div className="m-2 mb-7 w-[1150px mx-auto]">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
     <div className="grid gap-4 m-4 space-y-6 md:grid-cols-2">
        {menu?.map(item=><MenuItem key={item?._id} item={item}/>)}
     </div>
    </div>
  );
};

export default PopularMenu;
