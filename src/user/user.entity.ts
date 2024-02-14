// import { Details } from "src/details/details.entity";
import { BloodGroup } from "src/bloog-group/blood-group.entity";
import { Details } from "src/details/details.entity";
import { Post } from "src/post/post.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany } from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    adress: string;

    @OneToOne(() => Details, details => details.user)
    details: Details;

    @OneToOne(() => BloodGroup, bloodGroup => bloodGroup.user)
    bloodGroup: BloodGroup;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];
}