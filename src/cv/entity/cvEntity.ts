import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, DeleteDateColumn } from 'typeorm';
import { User } from '../../user/entity/userEntity';
import {Skill} from '../../skill/entity/skillEntity';


@Entity()
export class Cv {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  firstname: string;

  @Column()
  cin: string;

  @Column()
  job: string;

  @Column()
  age: number;

  @Column()
  path: string;

  @ManyToOne(()=>User)
  user: User;
   
  @ManyToMany(()=>Skill, (skill: { cvs: any; })=>skill.cvs  )
  skills: Skill[];

  @DeleteDateColumn()
  del : any;
}