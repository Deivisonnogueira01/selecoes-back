
import { createParamDecorator } from '@nestjs/common';
import { Selecao } from 'src/selecoes/entities/selecoes.entity';
export const GetSelecao = createParamDecorator(
  (data, req): Selecao => {
    const Selecao = req.args[0].Selecao;
    return Selecao;
  },
);
