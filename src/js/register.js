const register = (event, props, password2) => {
  const { name, setName, email, setEmail, password, setPassword } = props;
  event.preventDefault();
  const passwordMessage = document.querySelector("#password-message");
  if (name && email && password && password2) {
    if (password !== password2) {
      console.log("pbm password");
      passwordMessage.classList.remove("invisible");
    } else {
      passwordMessage.classList.add("invisible");
      setName(name);
      setEmail(email);
      setPassword(password);
      const form = document.querySelector("#form");
      const summary = document.querySelector("#summary");
      form.classList.toggle("invisible");
      summary.classList.toggle("invisible");
    }
  }
};

export default register;
