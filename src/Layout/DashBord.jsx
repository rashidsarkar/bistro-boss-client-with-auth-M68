import {
  TiCalendar,
  TiContacts,
  TiHome,
  TiShoppingCart,
  TiStar,
  TiThMenu,
} from "react-icons/ti";
import { TbBrandBooking, TbList } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { IoBagAddSharp } from "react-icons/io5";
import useCart from "../hooks/useCart";

function DashBord() {
  const { carts } = useCart();
  //TODO - get isAdmin value from the database
  const isAdmin = true;
  return (
    <div className="flex">
      {/* side Bar Content */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="p-4 menu">
          <li>
            <NavLink to={"/dashBord/userHome"}>
              <TiHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashBord/reservation"}>
              <TiCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashBord/review"}>
              <TiStar />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashBord/cart"}>
              <TiShoppingCart /> My Cart ({carts?.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashBord/myBooking"}>
              <TbList /> My Booking
            </NavLink>
          </li>
          {/* //NOTE - Sahred NavLinks */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <TiHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <IoBagAddSharp /> Order
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <TiThMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <TiContacts /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashbord Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default DashBord;
