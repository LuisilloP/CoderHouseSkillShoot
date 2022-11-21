import React from "react";
//components
import WelcomePage from "../component/WelcomePage";

import OursSkillshooters from "../component/OursSkillshooters";
import Comments from "../component/Comments";
import Form from "../component/Form";
//images
import SectionOne from "../component/SectionOne";
import { Helmet } from "react-helmet-async";
//

type Props = {};

const Principal = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>Skill Shot | Principal</title>
        <meta name="description" content="Example" />
      </Helmet>
      <WelcomePage />
      <SectionOne />
      <div className="container no-margin-top">
        <OursSkillshooters></OursSkillshooters>
      </div>
      <div>
        <Comments></Comments>
      </div>
      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default Principal;
