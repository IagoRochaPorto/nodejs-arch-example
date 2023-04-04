import { User } from "@/modules/user/models";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity implements User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ name: 'name' })
    name: string

    @Column({ name: 'age' })
    age: number

    @Column({ name: 'email' })
    email: string

    @Column({ name: 'password' })
    password: string
}
