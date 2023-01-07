import { IsOptional } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MealAddon } from '../meal-addon/meal-addon.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @OneToMany(
    type => MealAddon,
    mealAddon => mealAddon.brand,
  )
  mealAddons?: MealAddon[];
    user: any;
}
