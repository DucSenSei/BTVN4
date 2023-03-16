const express = require('express');
const multer = require('multer');
const uuid = require('uuid').v4;

const fileupload = multer({ dest: 'fileupload'});

const app = express();
app.use(express.static('axxx'));

app.post('/fileupload',fileupload.single('avatar'),(req,res) =>{
    return res.json('Upload file sussetfully');
})

app.listen(3001);
