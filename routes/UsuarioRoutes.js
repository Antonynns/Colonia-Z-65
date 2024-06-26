const express = require('express');
const routes = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const auth = require("../middlewares/usuarioAuth");
const nivel3 = require("../middlewares/usuarioSuperAdmin");
const nivel2 = require("../middlewares/usuarioAdmin");

routes.get("/usuarios", auth, UsuarioController.relatorio);
routes.get("/usuario/:id", auth, UsuarioController.detalhar);
routes.post("/usuarios", UsuarioController.cadastrar);
routes.get("/usuarios/login", UsuarioController.loginRender);
routes.post("/usuarios/login", UsuarioController.checkLogin);
routes.get("/usuarios/cadastrar", auth, UsuarioController.cadastrarRender);
routes.get("/usuario/cadastrar/:id", auth, UsuarioController.atualizar);
routes.get("/usuario/deletar/:id", auth, UsuarioController.deletar);

module.exports = routes;
