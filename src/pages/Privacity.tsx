import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import TermsAndCondition from "../component/TermsAndPrivacity";
const TermsCondition = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Helmet>
        <title>Skill Shoot | Privacidad</title>
      </Helmet>
      <TermsAndCondition
        title="Aviso de privacidad"
        text={`Privacidad y posesión de la información.

        Salvo expresamente indicado a lo contrario en este documento, cualquier información, comunicación o material que usted transmita en este «website» por correo electrónico o cualquier otra forma, incluyendo data, preguntas, comentarios o sugerencias serán tratados como no confidenciales y no propietario y se convertirán en propiedad de SKILLSHOT. Dicha información, comunicaciones o material puede ser utilizado para cualquier propósito, incluyendo pero sin limitarse a, la reprodución, solicitud, divulgación, transmisión, publicación, y posteo. Adicionalmente SKILLSHOT tiene la libertad de utilizar cualquier idea, concepto, conocimiento o técnicas contenidas en cualquier comunicación que usted remita a este «website», por cualquier propósito, incluyendo pero sin limitarse a desarrollar y mercadear productos utilizando dicha información.

        Nulidad parcial

        En caso que alguna disposición de estos Términos y Condiciones fuera declarada nula, ello no afectará la validez de las demás disposiciones.

        Jurisdicción y Ley aplicable

        Toda cuestión entre el Sitio y el Usuario estará regida por las leyes de la República Argentina, con exclusión de toda norma que remita a la aplicación de la ley extranjera. Cualquier controversia será sometida a los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires.

          `}
      ></TermsAndCondition>
    </motion.div>
  );
};

export default TermsCondition;
