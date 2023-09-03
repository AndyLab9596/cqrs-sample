import { Repository } from 'typeorm';
import { GetPersonQuery } from '../impl/get-person.query';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/typeorm/Person';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetPersonQuery)
export class GetPersonHandler implements IQueryHandler<GetPersonQuery> {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}
  async execute(query: GetPersonQuery): Promise<Person> {
    return await this.personRepo.findOneBy({
      id: query.id,
    });
  }
}
