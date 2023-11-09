import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { constants } from './jwt_secret.constants';

@Module({
    imports:[JwtModule.register({
        global:true,
        secret: constants.token,
        signOptions: { expiresIn: '30d' }
    })],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
