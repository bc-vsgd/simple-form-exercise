import { useState } from "react";
import "../src/assets/css/App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header />
      <main>
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Summary name={name} email={email} password={password} />
      </main>
      <Footer />
    </>
  );
}

export default App;
