const express = require('express');
const { getToDo, saveToDo, deleteToDo, updateToDo } = require('../controllers/toDocontroller.js');


const router= express.Router();

router.get("/get-todo", getToDo);
router.get('/',(req,res)=>{
    res.send({
        messsage: "hello"
    })
})
router.post("/save-todo", saveToDo);

router.post("/delete-todo", deleteToDo);

router.post("/update-todo", updateToDo);

module.exports = router;