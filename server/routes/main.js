const express = require('express');
const router = express.Router();



//Routes
router.get('',(req,res)=>{
    const locals = {
        title : "NodeJs Blog",
        description : 'Simple blog created with nodeJs express and mongoDB'
    }


    res.render('index',{locals})
});

router.get('/about',(req,res)=>{
    res.render('about')
})

module.exports = router;