'use strict'

var express = require('express')
var  usuarioControllers = require('../controllers/usuarios')
var pruebaAuth = require('../controllers/auth')
var api = express.Router()

api.get('Registro/home', pruebaAuth.getHome)

//api.get('/Usuarios/home', usuarioControllers.getHome)

api.get('/Usuarios/:idUsuario', usuarioControllers.getUsuario )

api.get('/Usuarios/', usuarioControllers.getUsuarios)

api.post('/Usuarios', usuarioControllers.saveUsuario)

api.delete('/Usuarios/:idUsuario', usuarioControllers.deleteUsuario)

api.put('/Usuarios', usuarioControllers.updateUsuario)

module.exports = api
