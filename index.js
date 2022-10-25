require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// enable cors
app.use(cors());

app.get('/', (req, res) => {
  res.send("hello world");
});

app.post('/api/post', (req, res) => {
  const {Username, Password, Email} = req.body;
  
  try {
    if(Username.length != 0 && Password.length != 0 && Email.length != 0) {
      res.send({
        'ReturnCode': 1,
        'Message': "Thành công" 
      });
    }

    res.send({
      'ReturnCode': 0,
      'Message': "Thất bại" 
    });
  } catch (error) {
    //console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
})