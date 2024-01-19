import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'BMW',
    model: 'M3',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A4',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    model: 'C200',
  }
];
