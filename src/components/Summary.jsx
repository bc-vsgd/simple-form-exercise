import edit from "../js/edit";

const Summary = (props) => {
  const { name, email, password } = props;
  return (
    <div id="summary" className="summary container invisible">
      <div>
        <h1>Results</h1>
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
        <button
          onClick={() => {
            edit();
          }}
        >
          Edit your information
        </button>
      </div>
    </div>
  );
};

export default Summary;
