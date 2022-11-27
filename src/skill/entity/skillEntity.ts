import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, DeleteDateColumn } from 'typeorm';
import { Cv } from '../../cv/entity/cvEntity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  designation: string;

  @ManyToMany(()=>Cv, cv=>cv.skills)
  @JoinTable()
  cvs: Cv[];

  @DeleteDateColumn()
  del : any;
}