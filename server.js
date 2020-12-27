const superheroes = require('superheroes');
const supervillians = require('supervillains');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use("/static", express.static('static'));

/* -------------- Root Route / Index Route -------------- */

app.get('/', (req,res)=>{
    res.render('index');
})

/* ------------------- SuperHero Route ------------------ */

app.post('/superHero', (req,res)=>{
    let sh = superheroes.random();

    res.render('superhero', {superHero: sh})
})

/* ----------------- SuperVillian Route ----------------- */

app.post('/superVillian', (req,res)=>{
    let sv = supervillians.random();

    res.render('supervillian', {SuperVillian: sv});
})

app.listen(port, ()=>{
    console.log('server started at port 3000');
})
