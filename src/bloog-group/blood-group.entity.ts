import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class BloodGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bloodType: string;

    @OneToOne(() => User, user => user.bloodGroup, { cascade: true })
    @JoinColumn()
    user: User;
}