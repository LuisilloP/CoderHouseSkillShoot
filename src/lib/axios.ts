import axios from "axios";

export const axiosCallMail = (name: string, message: string, mail: string) => {
  axios.defaults.headers.post["Content-Type"] = "application/json";
  const axiosResponse = axios
    .post("https://formsubmit.co/ajax/skillshot1vs1@gmail.com", {
      Nombre: name,
      Mensaje: message,
      Correo: mail,
    })
    const sendData = axiosResponse.then((response) => response.status)
    
    // .catch((error) => console.log(error));
    return sendData;
};
