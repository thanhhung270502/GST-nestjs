import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Get('/:id')
  getUserByID(@Param('id') id: string): Promise<User> {
    return this.authService.getUserByID(id);
  }

  @Post('/:id/:garden_id')
  pushGardenId(
    @Param('id') id: string,
    @Param('garden_id') garden_id: string,
  ): Promise<void> {
    return this.authService.pushGardenId(id, garden_id);
  }
}
