import { ForbiddenException, Injectable } from "@nestjs/common";
import { SignInDTO, SignUpDTO } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon2 from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService , private jwtService : JwtService ){
    }
    

    async SignIn(dto:SignInDTO ){

        try {

            const user = await this.prismaService.user.findUnique({
                where: {
                    email: dto.email
                }   
            })

            if(!user) return new ForbiddenException('Invalid credentials')

            const isMatch = await argon2.verify(user.password, dto.password)


            if(!isMatch) return new ForbiddenException('Invalid credentials')

            const {password , ...result } = user ;

            const token = await this.jwtService.signAsync(result)


            return {token};

        
            
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2025'){
                    return new ForbiddenException('Invalid credentials')
                }
            }
            throw error
        }

        
        }
    
   async SignUp(dto:SignUpDTO){
        try {
            const hashedPasword = await argon2.hash(dto.password)
          const user = await this.prismaService.user.create({
            data:{
                email:dto.email,
                password:hashedPasword,
                firstName:dto.firstName,
                lastName:dto.lastName
            }
          })
          const {password , ...result} = user;
        return result;
            
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    return new ForbiddenException('Email already exists')
                }

            }            
        }
    }
}