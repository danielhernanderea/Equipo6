'use strict'

var Usuarios = require('../models/usuarios')
var service = require('../../service')
var bcrypt = require('bcrypt-nodejs')

function registro (req, res) {
  console.log("POST /Registro ")
  var usuario = new Usuarios({
    id: req.body.idusuario,
    nombre: req.body.nombre,
    apellidop: req.body.apellidop,
    apellidom: req.body.apellidom,
    email: req.body.email,
    password: req.body.password
  })
  usuario.saldo=25000
  var query = {email:req.body.email}

  Usuarios.findOne(query, (err, document) => {
    if(err) return res.status(500).send({message: err})
    if(document!=null) return res.status(404).send({message: 'El correo ya esta registrado'})
    if(document==null) {
      bcrypt.genSalt(10,  (err, salt) => {
        if (err) {
          throw err
        } else {
          bcrypt.hash(usuario.password, salt, null, (err, hash) => {
            if (err) {
              throw err
            } else {
              usuario.password=hash
            }
          })
        }
      })

      usuario.save((err) => {
        if(err) res.status(500).send(`Error al realizar la búsqueda de usuario ${err}`)
        return res.status(200).send({token: service.createToken(usuario)})
      })
    }
  })
}

function registro_view(req, res){
  console.log('registro')
  res.sendFile('F:/BBVA/Hackathon/apibd/views/ingresar.html')
}

function login (req, res) {
  console.log("POST /Login ")
  console.log(req.body)
  var usuario = new Usuarios({
    email: req.body.email,
    password: req.body.pass
  })

  var query = {email:req.body.email}

   Usuarios.findOne(query, (err, document) => {
    if(err) return res.status(500).send({message: err})
    if(document==null){return res.redirect('/error');}
    if(document!=null) {
      bcrypt.compare(usuario.password, document.password,function(err,result) {
        if(result)
          console.log('usuario válido')
          res.render('F:/BBVA/Hackathon/apibd/views/opciones.html',{usuario:result});
          /*res.status(200).send({status:200,message:"Sesion Iniciada correctamente",
          usuario:{id:document.id,nombre:document.nombre,apellidop:document.apellidop,apellidom:document.apellidom,
                  email:document.email,saldo:document.saldo,},
          token:service.createToken(document)});*/

          //res.status(404).send({status:404,message:"Usuario y contraseña incorrectos"});
      })
    }
  })
}

function error(req,res){
  res.sendFile('F:/BBVA/Hackathon/apibd/views/error.html');
}

module.exports = {
  registro,
  login,
  registro_view,
  error
}
