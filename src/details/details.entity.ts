import { User } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Details {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    country: string;

    @OneToOne(() => User, user => user.details)
    @JoinColumn()
    user: User;
}