import { AxiosResponse } from "axios";
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";
import {axiosCallMail} from "../../lib/axios"
const MySwal = withReactContent(Swal);

export const Message = (name: string, message: string, mail: string) =>{ MySwal.fire({
  title: 'Estan todos los datos Correctos ?',
 
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Envialos!!!',
  cancelButtonText:"No, Aun no."
}).then((result) => {
  if (result.isConfirmed) {
    const response:Promise<number> =axiosCallMail(name,message,mail)
    if(response!=null){
    Swal.fire(
      'Enviado Correctamente!',
      'El mensaje sera leido por nuestros administradores.',
      'success'
    )}
  }
})
}