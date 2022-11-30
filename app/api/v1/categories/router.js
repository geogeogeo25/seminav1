const express = require('express');
const router = express();
let { create } =require('./controller');

router.get('/categories',(req, res)=>{
    let data = [
        {
          _id: 1,
          name: 'semina',  
        },
        {
            _id: 2,
            name: 'MERN',  
        },
    ];

    res.status(200).json({
        messaage : 'selamat datang di api 200',
    });
});

router.post('./categories',create);

module.exports = router;
    