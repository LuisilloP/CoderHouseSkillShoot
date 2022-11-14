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
        <title>Skill Shoot | Términos y condiciones</title>
      </Helmet>
      <TermsAndCondition
        title="Términos y condiciones"
        text={`Términos legales del sitio Web 
        El presente documento regula el acceso al website al que Usted acaba de acceder. En este apartado se detallan los principales aspectos legales a tener en cuenta para el uso de este website.
        
        El uso o acceso a este sitio web implica el conocimiento y aceptación de las advertencias legales y condiciones que a continuación se detallan.

        La aceptación del aviso legal tendrá carácter contractual. Asimismo, este documento podrá variar sin previo aviso, y sin que por ello el usuario quede exento de las nuevas condiciones que se puedan añadir.

        La utilización del Website atribuye la condición de Usuario e implica su aceptación plena y sin reservas a todas y cada una de las disposiciones incluidas en este Aviso Legal, motivo por el cual si no estuviere de acuerdo con cualquiera de las condiciones aquí establecidas, no deberá usar/acceder a este Website.

        Objeto

        A través del website, SKILLSHOT le facilita al usuario el acceso a diversos servicios, contenidos, información y datos puestos a disposición por SKILLSHOT.

        Derechos de autor

        Los contenidos, textos, fotografías, diseños, logotipos, imágenes, sonidos, vídeos, animaciones, grabaciones, programas de ordenador, códigos fuente y, en general, cualquier creación intelectual existente en este sitio, así como el propio sitio en su conjunto, como obra artística multimedia, son provistos por los torneos, complejos, jugadores, entrevistados y están protegidos como derechos de autor por la legislación en materia de propiedad intelectual.

        Condiciones de acceso

        En general, el acceso a la información de los distintos productos y servicios existentes en el website, así como su navegación será libre y gratuita no exigiéndose por tanto a los Usuarios el pertinente registro con la entrega de sus datos personales, ni la utilización de claves o contraseñas.

        El Usuario se compromete a hacer un uso adecuado y lícito del Website y de los Contenidos, de conformidad con la Legislación aplicable, las presentes Condiciones Generales de Uso del Website, la moral y buenas costumbres generalmente aceptadas y el orden público.

        El Usuario se obliga a abstenerse de utilizar el Website y los Servicios con fines o efectos ilícitos, contrarios a lo establecido en estas Condiciones Generales, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el Website y los Servicios o impedir la normal utilización o disfrute del Website y de los Servicios por parte de los Usuarios. Hacer uso no autorizado o fraudulento del Website y/o de los Contenidos con fines o efectos ilícitos, prohibidos en el presente Aviso Legal, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los Servicios. En este sentido, el Usuario se compromete a no realizar lo siguiente:

        1) Acceder o intentar acceder a recursos o áreas restringidas del Website, sin cumplir las condiciones exigidas para dicho acceso.
        
        2) Introducir o difundir en la red virus informáticos o cualquier otro tipo de sistema físico o lógico que sea susceptible de provocar daños en los sistemas físicos o lógicos de este Website, de sus proveedores o de terceros.
        3) Intentar acceder, utilizar y/o manipular los datos de este Website, de terceros y otros usuarios.

        4) Reproducir o copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificar los Contenidos.

        5) Suprimir, ocultar o manipular las notas sobre derechos de propiedad intelectual o industrial y demás datos identificativos de los derechos de este Website o de terceros incorporados a los Contenidos.

        6) El Usuario que acceda a esta Web no puede bajo ningún concepto copiar, modificar, distribuir, transmitir, reproducir, publicar, licenciar, ceder, vender o transmitir de cualquier forma, o crear nuevos productos o servicios derivados de la información y elementos aquí contenidos.

        7) Hacerse pasar por SKILLSHOT o por alguien más, o ridiculizar la identidad de SKILLSHOT u otros.

        Queda únicamente autorizada la mera visualización para el uso personal y no comercial del usuario, sin que pueda hacerlo extensivo a terceras personas o entidades.

        Confidencialidad y protección de datos

        Cualquier dato de carácter personal que el usuario proporcione para la utilización de los servicios y/o contenidos del portal estará sujeto a lo establecido en nuestra política de protección de datos y no serán entregados a terceros con fines comerciales o de análoga naturaleza.

        El Usuario podrá ejercitar los derechos reconocidos en la ley y en particular los de acceso, rectificación o cancelación de datos y oposición, así como el de revocación del consentimiento para la cesión de sus datos o para cualquiera de los usos antes señalados. El ejercicio de dichos derechos será por cada Usuario mediante solicitud escrita y firmada dirigida a la siguiente dirección de SKILLSHOT.

        
        Limitación de responsabilidad

        En ningún caso SKILLSHOT, sus proveedores o clientes, ni ninguna otra parte mencionada en este sitio podrá ser responsabilizada de ningún daño (incluyendo, sin límites, la pérdida de datos o interrupción de la actividad) que pudiera atribuirse al uso de este website, a los materiales o información publicados en él o en ninguno de los websites hacia los que mantiene un link.

        El propietario de este portal, no se hace responsable de los sitios a los que se accede a través de enlaces de este portal, ni aprueba, ni hace suyos los productos, servicios, contenidos, información, datos, archivos y cualquier otra clase de material existente en tales páginas/galerías o sitios web. Los únicos responsables son sus respectivos propietarios o administradores.
        
        Se reserva el derecho de modificar en cualquier momento la presentación, configuración y localización del Website, así como los Contenidos y las condiciones requeridas para utilizar los mismos.
        `}
      ></TermsAndCondition>
    </motion.div>
  );
};

export default TermsCondition;
