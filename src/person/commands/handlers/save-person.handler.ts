import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SavePersonCommand } from '../impl/save-person.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/typeorm/Person';
import { Repository } from 'typeorm';

@CommandHandler(SavePersonCommand)
export class SavePersonHandler implements ICommandHandler<SavePersonCommand> {
  constructor(
    @InjectRepository(Person) private personsRepo: Repository<Person>,
  ) {}

  async execute(command: SavePersonCommand): Promise<any> {
    const newPerson = new Person();
    newPerson.age = command.age;
    newPerson.name = command.name;
    await this.personsRepo.save(newPerson);
  }
}
