//import { useSelector } from "react-redux";
import logo from "../../../public/assets/images/spring.png";
import LoginInput from "./loginInput/loginInput";
import LoginButton from "./loginButton/LoginButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    if (username == "admin" && password == 1234) {
      dispatch(loginAction({ username, password }));
      navigate("//");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <div className="login__header">
        <img className="login__header__image" src={logo} alt="logo_icon" />
      </div>

      <div className="login__card">
        <div className="login__card__header">
          <span className="login__card__header__sentence">
            Please, Enter your details
          </span>
          <h4 className="login__card__header__title">Welcome</h4>
        </div>
        <form className="login__card__info" onSubmit={handleSubmit}>
          <div className="login__card__info__inputs">
            <LoginInput
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <LoginInput
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="login__card__info__buttons">
            <LoginButton label="Submit" />
            <LoginButton label="Continue with Google" />
          </div>
        </form>
      </div>
    </div>
  );
}
