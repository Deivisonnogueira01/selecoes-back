import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelecaoController } from './selecoes.controller';
import { SelecaoService } from './selecoes.service';
import { Selecao } from './entities/selecoes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Selecao]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [SelecaoController],
  providers: [SelecaoService],
})
export class SelecaoModule {}
