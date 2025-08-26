const axios = require("axios");
async function main() {
  console.log("Hola Bootcamp 👋");
  try {
    const res = await axios.get("https://api.github.com");
    console.log("Estado:", res.status);
    console.log("Servidor:", res.headers.server);
  } catch (err) {
    console.error("Falla al consultar API:", err.message);
  }
}
main();
