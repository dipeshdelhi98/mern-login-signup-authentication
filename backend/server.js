const express=require('express')
const cors=require('cors');
const mongoose=require('mongoose')
const app=express();
const PORT=8000;
const DB_URL='mongodb+srv://root:root@cluster0.9gwkj.mongodb.net/?retryWrites=true&w=majority'
const userRouter=require('./routes/userRoutes')


app.use(cors())

mongoose.connect(DB_URL,()=>{
    console.log("Database is connected.......")
});

app.use(express.json());

app.use('/',userRouter)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})

