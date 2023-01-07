import { Model } from 'objection';

export interface Brand extends Model {
  id: string;
  name: string;
  description: string;
  mealAddons: any[];
  user: any;
}
