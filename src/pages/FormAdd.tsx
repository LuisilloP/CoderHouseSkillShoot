import {motion} from "framer-motion"
import Form from '../component/Form'
const FormAdd = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    className="container"
    transition={{
      duration: 2,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]}}
      ><Form/></motion.div>
  )
}

export default FormAdd