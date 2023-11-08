import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {  SignUpDTO , SignInDTO } from "src/dto";





@Controller('auth')
export class AuthController {

   
    constructor(private authService: AuthService){}


    @Post('/signin')
    signIn(@Body() dto:SignInDTO){
        return this.authService.SignIn(dto);
        
   
    }
    @Post('/signup')
    SignUp(@Body() dto:SignUpDTO){
        return this.authService.SignUp(dto);
    }

}