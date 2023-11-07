import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDTO } from "src/DTO";





@Controller('auth')
export class AuthController {

   
    constructor(private authService: AuthService){}


    @Post('/signup')
    signUp(@Body() dto:SignInDTO){
        console.log(dto)
        return this.authService.signUp();
    }
    @Post('/signin')
    signIn(){
        return this.authService.signIn();
    }

    
    
}