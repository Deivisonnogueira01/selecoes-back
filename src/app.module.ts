import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelecaoModule } from './selecoes/selecoes.module';
import { Selecao } from './selecoes/entities/selecoes.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'selecoesback',
      entities: [Selecao],
      synchronize: true,
      logging: true,
    }),
    SelecaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
