import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService){
    }
    

    signUp( ){
        return {msg:'signUp'};
    }
    signIn(){
        return {msg:'signIn'};
    }
}