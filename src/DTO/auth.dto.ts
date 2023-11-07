import { IsAlphanumeric, IsEmail, IsNotEmpty } from "class-validator";

export class SignInDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    @IsAlphanumeric()
    password: string;

}