import { motion } from "framer-motion";
import React from "react";
type Props = {
  text: any;
  title: string;
};
const TermsAndCondition = ({ text, title }: Props) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="Terms-Condition">
        <div className="Terms-img  font-img-style">
          <div className="Terms-text-img">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="text-terms cabin">
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsAndCondition;
