import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUpDTO {

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;


    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    @IsAlphanumeric()
    password: string;

}



export class SignInDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    @IsAlphanumeric()
    password: string;
}