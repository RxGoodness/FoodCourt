import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Roles } from '../auth/roles.enum';
import { Brand } from '../brand/brand.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: Roles.USER })
  role?: Roles;

  @OneToMany(
    type => Brand,
    brand => brand.id,
  )
  brands?: Brand[];
}
