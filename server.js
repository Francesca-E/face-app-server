const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex=require('knex');
const register=require('./controllers/Register');
const signIn=require('./controllers/SignIn');
const profile=require('./controllers/Profile');
const image=require('./controllers/Image');



const db= require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'smart-brain'
    }
 });


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req,res)=>{register.handleRegister(req, res, db, bcrypt)})

app.post('/signin', (req,res) =>{signIn.handleSignIn(req, res, db, bcrypt)})

app.get('/profile/:id', (req, res)=>{profile.handleProfile(req, res, db)})

app.put('/image',(req, res)=>{image.handleImage(req, res, db)})

app.put('/imageurl',(req, res)=>{image.handleImageUrl(req, res)})

app.listen(3001, ()=>{
  console.log('this function checks the app is running on port3000')
})
