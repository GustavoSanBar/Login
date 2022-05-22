import React, { useState } from "react";
import './styles.css';
import logo from './imagens/Logo.png'




function App() {
  const[nome, setnome] = useState("")
  const[password, setPassword] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem vindo</span>

            <span className="login-form-title">
              <img src={logo} alt="DevJr"/>
            </span>

            <div className="wrap-input">
              <input
               className={nome !== "" ? 'has-val input' : 'input' }
               type="string"
               value={nome}
               onChange={e => setnome(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input
              className={password !== "" ? 'has-val input' : 'input' }
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="conntainer-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="txt-center">
              <span className="txt1">Não possui conta?</span>

              <a className="txt2" href="#"> Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
    
  );
}

export default App;
