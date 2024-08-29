import {Controller,Post,Body} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('login')
    async login(@Body() body: {username: string; password: string}): Promise<any> {
        const user = await this.authService.validateUser(body.username, body.password);
        if(user) {
            return {
                role: user.role,
            };
        }

        return {
            message: 'Invalid credentials',
        };
    }
}