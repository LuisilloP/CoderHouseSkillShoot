import React from "react";
interface Props {
  classNameBtnSmall?: string;
}

import {
  Button,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const BtnJoinUp = ({ classNameBtnSmall }: Props) => {
  return (
    <Button
      activeClass="active"
      className={`btn-welcome-join ${classNameBtnSmall}`}
      type="submit"
      value="Unirse ahora"
      to="container-form"
      spy={true}
      smooth={true}
      offset={50}
      duration={2000}
    ></Button>
  );
};

export default BtnJoinUp;
