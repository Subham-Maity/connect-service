import {Injectable,Inject} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class AuthService{
    private readonly users: any[] = [
        {
            username: 'Abc DAB',
            password: 'supersecret',
            role: 'super-admin',
          },
          {
            username: 'Mno PQR',
            password: 'adminsecret',
            role: 'admin',
          },
          {
            username: 'Xyz LMN',
            password: 'usersecret',
            role: 'admin',
          },
    ]
    constructor(private readonly configService: ConfigService){}
    async validateUser(username: string, password: string): Promise<any>{
        const user= this.users.find((user) => user.username ===username && user.password===password);
        if(user){
            return user;
        }
        return null;
    }
}