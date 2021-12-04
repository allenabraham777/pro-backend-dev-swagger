const express = require('express')
const format = require('date-format');

const PORT = process.env.PORT || 3000

const app = express();

app.get('/', (req, res) => {
  res.status(201).send("<h1>Hello World</h1>")
});

app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    username: 'allenabraham777',
    followers: 66,
    follows: 70,
    date: format.asString('dd MM yyyy, hh:mm:ss', new Date())
  }

  res.status(200).json(instaSocial);
});

app.get('/api/v1/facebook', (req, res) => {
  const facebookSocial = {
    username: 'allenabraham777',
    followers: 77,
    follows: 80,
    date: format.asString('dd MM yyyy, hh:mm:ss', new Date())
  }

  res.status(200).json(facebookSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
  const linkedinSocial = {
    username: 'allenabraham777',
    followers: 88,
    follows: 90,
    date: format.asString('dd MM yyyy, hh:mm:ss', new Date())
  }

  res.status(200).json(linkedinSocial);
});

app.get('/api/v1/:token*', (req, res) => {
  res.status(200).json({param: req.params.token});
});

app.listen(PORT, (err)=>{
  if(err) {
    console.error(err);
    return process.exit(0)
  }
  console.log("App started successfully")
})