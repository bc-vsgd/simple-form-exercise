import { useState } from "react";
import register from "../js/register";

const Form = (props) => {
  const [password2, setPassword2] = useState("");
  const { name, setName, email, setEmail, password, setPassword } = props;
  return (
    <form
      id="form"
      className="container"
      onSubmit={(event) => {
        register(event, props, password2);
      }}
    >
      <h1>Create account</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Jean Dupont"
          value={name}
          onChange={(event) => {
            const value = event.target.value;
            setName(value);
          }}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="jeandupont@lereacteur.io"
          value={email}
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="pSu_iR4!8oTr"
          value={password}
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
        />
      </div>
      <div>
        <label>Confirm your password</label>
        <input
          type="password"
          placeholder="pSu_iR4!8oTr"
          value={password2}
          onChange={(event) => {
            const value = event.target.value;
            setPassword2(value);
          }}
        />
        <p id="password-message" className="invisible">
          Your passwords are different !
        </p>
      </div>
      <div>
        <button>Register</button>
      </div>
    </form>
  );
};

export default Form;
