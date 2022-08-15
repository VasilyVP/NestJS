import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { User as IUser } from './interfaces/user.interface';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private users: Repository<User>,
  ) {}

  usersAll() {
    return this.users.find();
  }

  async user({ search }: { search: string }) {
    return this.users.find({
      where: [
        { firstName: Like(`%${search}%`) },
        { lastName: Like(`%${search}%`) },
      ],
    });
  }

  create(userData: IUser) {
    const user = new User();

    user.firstName = userData.firstName;
    user.lastName = userData.lastName;

    return user.save();
  }
}
