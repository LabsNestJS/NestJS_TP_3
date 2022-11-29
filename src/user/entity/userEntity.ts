import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DeleteDateColumn } from 'typeorm';
import { Cv } from '../../cv/entity/cvEntity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable:false })
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Cv,(cv: Cv)=>cv.user)
    cvs : Cv[] ;

    @DeleteDateColumn()
    del : any;
}