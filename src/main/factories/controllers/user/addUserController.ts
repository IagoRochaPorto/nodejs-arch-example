import { AddUserController } from "@/presentation/http/controllers/user";
import { makeAddUser } from "@/main/factories/useCases/user";

export function addUserController() {
  return new AddUserController(makeAddUser());
}
