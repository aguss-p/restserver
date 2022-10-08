const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = "/api/users";
    this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares() {
    this.app.use(express.static("public"));

    // lectura y parse del body

    this.app.use(express.json());

    this.app.use(cors());
  }

  routes() {
    this.app.use(this.usuariosRoutePath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log("corriendo en el puerto ", this.port)
    );
  }
}
module.exports = { Server };
