import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { CreateSelecaoDto } from './create-selecao.dto';

export class UpdateSelecaoDto extends PartialType(CreateSelecaoDto) {
  @IsOptional()
  @IsString({

    message: 'Informe um nome de usuário válido',
  })
  
  name: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'Informe um endereço de email válido',
    },
  )
  email: string;

}
