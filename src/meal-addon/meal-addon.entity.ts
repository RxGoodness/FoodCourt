import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Brand } from '../brand/brand.entity';

@Entity()
export class MealAddon {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Brand)
  @JoinColumn()
  brand: Brand;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  category: string;
}
