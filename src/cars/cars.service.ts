import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

  private cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Yaris',
      year: 2019,
    },
    {
      id: 2,
      make: 'Tesla',
      model: 'Model 3',
      year: 2020,
    },
    {
      id: 3,
      make: 'Honda',
      model: 'Accord',
      year: 2018,
    },
  ];

  public findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if( !car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
  
}
