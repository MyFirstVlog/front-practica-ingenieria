import React from 'react';
import './LoginStyle.css';
import './style.css';

export const LoginPage = () => {

  return (
    <div className="login-container">
      <div className="login-body">
        <div className="login-image">
          <img
            src="https://res.cloudinary.com/dpp07uuh5/image/upload/v1655347814/atomo-logo_2x_k5gsej.png"
            alt="cidenet"
            className="logo"
          ></img>
        </div>
        <div className="bottom-card">
          <div className="container">
            <div className="name-container">
              <img
                src="https://res.cloudinary.com/dpp07uuh5/image/upload/v1655439104/atomo-logogestionappte_2x_y4ljlf.png"
                alt="cidenet"
              ></img>
              <span>Para nuestros colaboradores</span>
            </div>
          </div>
          <div className="container">
            <div className="access-container">
              <div className="col font-size-medium margin-bottom google-title">
                <strong className="white-color">Iniciar sesión</strong>
              </div>
              <div className="row">
                <div className="col margin-bottom">
                  <button className="btn btn-login rounded-pill">
                    <div className="row">
                      <div className="col ">
                        <i className="fa-brands fa-google"></i> |
                        <strong> INICIA SESIÓN CON GOOGLE</strong>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="email-login-container">
                <span>Ingresa con el correo corporativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};