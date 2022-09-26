import express from 'express' //@types/express and definetelytyped
import controller from './controllers/controller'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping',(_,res)=>{
    console.log('oli')
    res.send(controller.getAll());
})

app.get('/oli',(_,res)=>{
    console.log('oli')
    res.send('<h1>Si wenas</h1>')
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})
