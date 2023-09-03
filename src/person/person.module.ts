import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/typeorm/Person';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPersonsHandler } from './queries/handlers/get-persons.handler';
import { SavePersonHandler } from './commands/handlers/save-person.handler';
import { GetPersonHandler } from './queries/handlers/get-person.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Person]), CqrsModule],
  controllers: [PersonController],
  providers: [GetPersonsHandler, SavePersonHandler, GetPersonHandler],
})
export class PersonModule {}
