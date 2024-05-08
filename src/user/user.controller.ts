import { 
    Controller,
    Get, 
    Patch, 
    Req, 
    UseGuards 
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/dist/guard/jwt.guard';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    @Get('me')
    getMe(
        @GetUser() user: User){
        return user;
    }

    @Patch()
    editUser() {}
}
