import { useState } from "react";

import Results from "./Steptwo";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdcheck, setPwdcheck] = useState("");

  // State qui gère le contenu et l'affichage de mon message d'erreur
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction qui gère le onChange de l'input password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <h1>Create account</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password !== pwdcheck) {
            setErrorMessage("les 2 mots de passe doivents être identiques");
            alert(`les 2 mots de passe doivents être identiques`);
          }
          if (password === pwdcheck && password) {
            setErrorMessage("");
            alert(
              `Bravo, vous avez soumis votre formulaire. Votre email est ${email}`
            );
          }
        }}
      >
        <label for="name">name</label>
        <input
          id="name"
          placeholder="Alex b"
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label for="email">Email</label>
        <input
          id="email"
          placeholder="ab@mail.com"
          type="text"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label for="password">Password</label>
        <input
          id="password"
          placeholder="qrrgdfdf?pe+"
          type="text"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label for="pwdcheck">Confirm your password</label>
        <input
          id="pwdcheck"
          placeholder="qrrgdfdf?pe+"
          type="text"
          name="pwdcheck"
          value={pwdcheck}
          onChange={(event) => {
            setPwdcheck(event.target.value);
          }}
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
export default Form;
