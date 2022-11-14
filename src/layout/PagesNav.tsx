import {motion} from "framer-motion"
interface Props 
{
  className:string;
}

import { NavLink } from "react-router-dom";
import BtnJoinUp from "../component/btnJoinUp/BtnJoinUp";
const PagesNav = ({className}:Props) => {
  return (
    <ul className={className}>
      <li className="li-animation" >
        <NavLink to="/Nosotros">Nosotros</NavLink>
      </li>
      <li className="li-animation">
        <NavLink to="/Reglamento">Reglamento</NavLink>
      </li>
      <li><BtnJoinUp classNameBtnSmall ={"btn-join-jr"}></BtnJoinUp></li>
    </ul>
  );
};

export default PagesNav;
