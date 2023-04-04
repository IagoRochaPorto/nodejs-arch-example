import { UseCase } from "@/shared/types";
import { AddUserDto } from "../dtos";
import { AddUserRepository } from "../repositories";
import { Encrypter } from "../providers";

export class AddUser implements UseCase<AddUserDto.Request, AddUserDto.Response> {
    constructor(
        private readonly addUserRepository: AddUserRepository,
        private readonly encrypter: Encrypter
    ) {}

    async execute(user: AddUserDto.Request): Promise<AddUserDto.Response> { 
        const encryptedPassword = await this.encrypter.encrypt(user.password)
        const savedUSer = await this.addUserRepository.add({
            age: user.age,
            email: user.email,
            name: user.name,
            password: encryptedPassword,
        })
        
        return savedUSer
    }
}