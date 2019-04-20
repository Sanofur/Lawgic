/**
 * Created by daouda on 12/08/17.
 */
var express = require('express');
var app = express();
var cors = require('cors');

// ADD THESE TWO LINES

app.use(cors());

var MatiereController = require('./matiere/MatiereController');
app.use('/matieres', MatiereController);

var EtudiantController = require('./etudiant/EtudiantController');
app.use('/etudiants', EtudiantController);

var NoteController = require('./note/NoteController');
app.use('/notes', NoteController);

var LoginController = require('./login/LoginController');
app.use('/login', LoginController);


var SignupController = require('./Signup/SignupController');
app.use('/Signup', SignupController);

var CaseController = require('./Case/CaseController');
app.use('/Case', CaseController);


module.exports = app;