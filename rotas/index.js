const express = require('express');
const router = express.Router()
const  controllers = require ("../controllers/usersControllers");
const academiaControllers = require('../controllers/academiaControllers');
const treinosControllers = require('../controllers/treinosControllers');
const service = require ('../services/checkinServices')
const checkinControllers = require ('../controllers/checkinControllers')

 // rotas de usuários 
router.post ('/users',controllers.createUser)
router.get ('/users', controllers.usersList)
router.put ('/users/:_id', controllers.usersAtt)
router.delete('/users/:_id', controllers.userDelet)

//rotas de academias

router.get('/gym', academiaControllers.ListaAcademia)
router.post('/gym', academiaControllers.AcademiaCreate);
router.put ('/gym/:_id', academiaControllers.AtualizarAcademia)
router.delete('/gym/:_id', academiaControllers.AcademiaDelete)

// rotas de treino

router.get ('/workout', treinosControllers.ListaTreino)
router.post('/workout', treinosControllers.TreinoCreate)
router.put ('/workout/:_id', treinosControllers.AtualizarTreino)
router.delete ('/workout/:_id', treinosControllers.TreinoDelete)

// rota de checkin
 
router.get('/check-in', service.fazerCheckIn)


module.exports= router
