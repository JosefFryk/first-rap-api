const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England'
},
    'eminem' : {
        'age':  49,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation' : 'Detroit, Michigan'
    },
    'lupe fiasco' : {
        'age': 40,
        'birthName': 'Wasalu Muhammad Jaco',
        'birthLocation' : 'Chicago, Illinois'
    }

}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['eminem'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})