// const { envs } = require("./config/env");
// const { startServer } = require("./server/server");
import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};

// Función agnóstica autoconvocada
// Agnóstica por que no tiene nombre
// Autoconvocada porque la ejecución con los parentesis
(async () => {
  main();
})();
