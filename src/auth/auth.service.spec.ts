import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule.register({}), UserModule],
      providers: [AuthService, UserService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Given a req then return a token', async () => {
    const req = { user: { username: 'test' , sub: 'test', roles: 'test'} }
    const token = service.login(req);

    expect(token).not.toBeNull();

  });

  it('Given a valid user and pass then return a true', async () => {
    const validUser = await service.validateUser('UserRead', 'UserRead')

    expect(validUser).not.toBeNull();

  });

  it('Given a valid user and pass then return a true', async () => {
    const validUser = await service.validateUser('UserRead', 'ghgh')

    expect(validUser).toBeNull();

  });

  it('Given a valid user and pass then return a true', async () => {
    const validUser = await service.validateUser('dfgfg', 'UserRead')

    expect(validUser).toBeNull();

  });
});
