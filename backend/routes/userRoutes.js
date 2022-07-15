const express=require('express')

const route=express.Router();

const userController=require('../controllers/userController')



route.post('/signup',userController.create)
route.post('/login',userController.login)






module.exports=route