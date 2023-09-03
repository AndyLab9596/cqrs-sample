import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPersonsQuery } from './queries/impl/get-persons.query';
import { SavePersonCommand } from './commands/impl/save-person.command';
import { GetPersonQuery } from './queries/impl/get-person.query';

@Controller('person')
export class PersonController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get('all')
  async getAll() {
    return await this.queryBus.execute(new GetPersonsQuery());
  }

  @Post('create')
  async createPerson(@Body() newPerson: { age: number; name: string }) {
    return await this.commandBus.execute(
      new SavePersonCommand(newPerson.age, newPerson.name),
    );
  }

  @Get(':id')
  async getPersonById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return await this.queryBus.execute(new GetPersonQuery(id));
  }
}
