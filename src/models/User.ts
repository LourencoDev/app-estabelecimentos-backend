import {
  Column, 
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn 
} from 'typeorm';

@Entity('user')
export class User {
  @Generated('uuid')
  @PrimaryColumn('varchar')
  id!: string;
  
  @Column('varchar')
  email!: string;
  
  @Column('varchar')
  password!: string;
  
  @CreateDateColumn()
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}