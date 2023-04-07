import { BcryptAdapter } from "@/infra/criptography/bcrypt";
import { UserRepository } from "@/infra/database/typeorm/repositories/userRepository";
import { AddUser } from "@/modules/user/useCases";

export function makeAddUser() {
  const userRepository = new UserRepository()
  const encrypter = new BcryptAdapter(12)

  return new AddUser(userRepository, encrypter)
}
