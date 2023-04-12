import { UseCase } from "@/shared/types";
import { UpdateUserDto } from "../dtos/updateUserDto";
import { UpdateUserRepository } from "../repositories";

export class UpdateUser implements UseCase<UpdateUserDto.Request, UpdateUserDto.Response> {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository
  ) { }

  async execute(request: UpdateUserDto.Request): Promise<UpdateUserDto.Response> {
    const updatedUser = await this.updateUserRepository.update(request)

    return { data: updatedUser }
  }
}
