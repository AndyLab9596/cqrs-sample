import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'person' })
export class Person {
  @PrimaryGeneratedColumn({
    name: 'person_id',
  })
  id: number;

  @Column({
    name: 'person_name',
  })
  name: string;

  @Column({
    name: 'person_age',
  })
  age: number;
}
