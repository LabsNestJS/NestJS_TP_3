import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, DeleteDateColumn } from 'typeorm';
import { Cv } from '../../cv/entity/cvEntity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  designation: string;

  @ManyToMany(()=>Cv, (cv: Cv) => cv.skills)
  @JoinTable({
    name: 'cv_skill',
    joinColumn: 
    {
      name: 'cv',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: 
    {
      name: 'skill',
      referencedColumnName: 'id',
    },
  })
  cvs: Cv[];

  @DeleteDateColumn()
  del : any;
}