import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Yaris',
      year: 2019,
    },
    {
      id: uuid(),
      brand: 'Tesla',
      model: 'Model 3',
      year: 2020,
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Accord',
      year: 2018,
    },
  ];

  public findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if( !car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
  
}
