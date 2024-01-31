import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users: any[] = [
    {
      id: 1,
      username: 'studentcouncil',
      password: 'studentcouncil',
      role: 'studentCouncil',
    },
    {
      id: 2,
      username: 'clubofficer',
      password: 'clubofficerpassword',
      role: 'clubOfficer',
    },
    { id: 3, username: 'user', password: 'userpassword', role: 'user' },
  ];

  async validateUserById(userId: number): Promise<any> {
    return this.users.find((user) => user.id === userId);
  }

  async validateUserByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<any> {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    return user;
  }

  async validateUserByToken(sub: string): Promise<any> {
    const user = this.users.find((u) => u.id === +sub);
    return user;
  }
}
