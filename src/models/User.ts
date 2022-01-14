import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {
  @Generated('uuid')
  @PrimaryColumn('int')
  id!: number;
  
  @Column()
  email!: string;
  
  @Column()
  password!: string;
  
  @CreateDateColumn()
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}