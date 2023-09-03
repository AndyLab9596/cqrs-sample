import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './typeorm/Person';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'qweasdzxc',
      database: 'cqrs_sample',
      entities: [Person],
      synchronize: true,
    }),
    PersonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
