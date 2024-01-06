const edit = () => {
  const form = document.querySelector("#form");
  const summary = document.querySelector("#summary");
  // const summary = document.querySelector(".summary");
  form.classList.toggle("invisible");
  summary.classList.toggle("invisible");
};

export default edit;
