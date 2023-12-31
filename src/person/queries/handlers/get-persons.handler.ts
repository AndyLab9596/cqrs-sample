import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPersonsQuery } from '../impl/get-persons.query';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/typeorm/Person';
import { Repository } from 'typeorm';

@QueryHandler(GetPersonsQuery)
export class GetPersonsHandler implements IQueryHandler<GetPersonsQuery> {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}
  async execute(query: GetPersonsQuery): Promise<Person[]> {
    return await this.personRepo.find();
  }
}
