// import { Details } from "src/details/details.entity";
import { BloodGroup } from "src/bloog-group/blood-group.entity";
import { Details } from "src/details/details.entity";
import { Post } from "src/post/post.entity";
import { Role } from "src/role/role.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    adress: string;

    @Column()
    image: string;

    @Column({ type: 'bytea', nullable: true })
    @OneToOne(() => Details, details => details.user)
    details: Details;

    @OneToOne(() => BloodGroup, bloodGroup => bloodGroup.user)
    bloodGroup: BloodGroup;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

    // mantTomany Relations
    @ManyToMany(() => Role, role => role.users)
    // @JoinTable()
    roles: Role[];
}