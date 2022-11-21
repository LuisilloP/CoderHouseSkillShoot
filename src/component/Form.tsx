import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { formUser, formUserValidator } from "../types";
import { Message } from "./sweetAlert/SweetAlert";

import Instagram from "../assets/instagram.png";
import Tiktok from "../assets/tik-tokTwo.png";
interface FormState {
  inputValues: formUser;
  Validator: formUserValidator;
}
const regexString: RegExp = /^[A-Za-z ]+$/;
const regexMail: RegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [ValidateName, setValidateName] = useState([false, ""]);
  const [ValidateMail, setValidateMail] = useState([false, ""]);
  const [ValidateMessage, setValidateMessage] = useState([false, ""]);
  const [inputValue, setInputValue] = useState<FormState["inputValues"]>({
    name: "",
    mail: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let sendMensaje = 0;
    event.preventDefault();
    if (isChecked) {
      if (!regexString.test(inputValue.name)) {
        setValidateName([
          true,
          "Nombre invalido, El nombre debe contener al menos una letra. Sin numeros.",
        ]);
        sendMensaje -= 1;
      } else if (inputValue.name.trim().length <= 0) {
        setValidateName([
          true,
          "Nombre invalido, El nombre debe contener al menos una letra",
        ]);
        sendMensaje -= 1;
      } else {
        setValidateName([false, ""]);
        sendMensaje += 1;
      }

      if (!regexMail.test(inputValue.mail)) {
        setValidateMail([
          true,
          "Correo invalido, El Correo debe ser formato mail ej:Correo@gmail.com.",
        ]);
        sendMensaje -= 1;
      } else {
        setValidateMail([false, ""]);
        sendMensaje += 1;
      }
      if (inputValue.message.trim().length <= 10) {
        setValidateMessage([
          true,
          "Mensaje invalido, El Mensaje debe contener al menos 10 caracteres..",
        ]);
        sendMensaje -= 1;
      } else {
        setValidateMessage([false, ""]);
        sendMensaje += 1;
      }

      //console.log(sendMensaje)
      if (sendMensaje === 3) {
        Message(
          inputValue.name,
          inputValue.message,
          inputValue.mail,
          setInputValue,
          setIsChecked
        );
      } else {
      }
    } else {
    }
  };

  return (
    <div className="container-form">
      <div className="divider"></div>
      <div>
        <div className="join-to-logo">
          <h3>UNITE AHORA A</h3>
          <div className="logo-black"></div>
        </div>
      </div>
      <div className="form-text">
        <h3>
          Completá con tus datos y nosotros nos podremos en contacto en la
          brevedad posible.
        </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name1">Nombre</label>
          <div className="flex-colum">
            <input
              onChange={handleChange}
              onClick={() => {
                setValidateName([false, ""]);
              }}
              value={inputValue.name}
              type="text"
              name="name"
              id="name1"
            />
            {ValidateName[0] && (
              <p className="error-message">{ValidateName[1]}</p>
            )}{" "}
          </div>
          <label htmlFor="mail1">Correo</label>
          <div className="flex-colum">
            <input
              onChange={handleChange}
              onClick={() => {
                setValidateMail([false, ""]);
              }}
              value={inputValue.mail}
              type="text"
              name="mail"
              id="mail1"
            />
            {ValidateMail[0] && (
              <p className="error-message">{ValidateMail[1]}</p>
            )}
          </div>
          <label htmlFor="message1">Mensaje</label>
          <div className="flex-colum">
            <textarea
              onChange={handleChange}
              onClick={() => {
                setValidateMessage([false, ""]);
              }}
              value={inputValue.message}
              name="message"
              id="message1"
            />
            {ValidateMessage[0] && (
              <p className="error-message">{ValidateMessage[1]}</p>
            )}{" "}
          </div>
          <div className="terms-acept">
            <label>
              <input
                type="checkbox"
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <svg
                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                aria-hidden="true"
                viewBox="0 0 15 11"
                fill="none"
              >
                <path
                  d="M1 4.5L5 9L14 1"
                  strokeWidth="2"
                  stroke={isChecked ? "#fff" : "none"}
                />
              </svg>
              Acepto los{" "}
              <NavLink to="/Terminos&Condiciones" className={"link-term"}>
                Términos y condiciones.
              </NavLink>
            </label>
          </div>
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="submit"
            value="Enviar"
            className={`btn-send-form ${isChecked ? "" : "no-check"}`}
          />
        </form>
      </div>
      <div className="follow cabin">
        <h4>Seguinos en</h4>
        <div className="follow-img">
          <a
            href="https://www.instagram.com/skillshot1vs1/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR3h9zNW5HMn_QhggVZh2brsLR0oqtXiT1QiUw0t6FRmLpxH4qOrK81EsXc"
            target="_blank"
          >
            <img
              className=" logo"
              src={Instagram}
              alt="logo-instagram"
              aria-label="logo-instagram"
            />
          </a>
          <a href="https://www.tiktok.com/@skillshot1vs1" target="_blank">
            <img
              className=" logo"
              src={Tiktok}
              alt="logo-tik-tok"
              aria-label="logo-tiktok"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
