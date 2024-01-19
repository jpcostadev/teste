export default function apiFull() {
  const btn = document.querySelector(".btnEntrar");
  const form = document.querySelector("#login");
  const user = document.getElementById("usuario");
  const pass = document.getElementById("password");

  const url = "http://apifinancas.test/json/jwt-auth/v1/token";

  async function tokenValidate(user, pass) {
    const token = localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: user.value,
        password: pass.value,
      }),
    };
    const response = await fetch(url, options);
    const dadosJSON = await response.json();
    console.log(dadosJSON);
  }

  async function handleClick(event) {
    event.preventDefault();
    const clicou = event.target;
    if (clicou) {
      tokenValidate(user, pass);
    }
  }

  function handleChange(event) {
    console.log(event.target);
    console.log(event.target.value);
    user = event.target.value;
    pass = event.target.value;
  }

  form.addEventListener("change", handleChange);

  btn.addEventListener("click", handleClick);
}
