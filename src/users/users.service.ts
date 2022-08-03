import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  users: User[] = [];

  usersAll() {
    return this.users;
  }

  async user({ search }: { search: string }) {
    return this.users.filter(
      (user) => user.email.includes(search) || user.userName.includes(search),
    );
  }

  async create(user: User) {
    this.users.push(user);

    return user;
  }
}
