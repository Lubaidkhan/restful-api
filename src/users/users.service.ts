import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {

    constructor(@InjectModel('user') private readonly userModel:Model<User>){}

    async findOne(id:string) : Promise<User> 
    {
        return this.userModel.findOne({id})
    }
 
    async create(user: User) : Promise<User> {

        return 
    }

}
