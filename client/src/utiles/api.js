const axios = require('axios');

const baseUrl="http://localhost:8080"

const getAllDo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        consoles.log("dataa.....>>,",data)
        setToDo(data)
    })
}
export {getAllDo}