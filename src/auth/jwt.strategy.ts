import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Selecao } from '../selecoes/entities/selecoes.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Selecao)
    private selecaoRepository: Repository<Selecao>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'super-secret',
    });
  }

  async validate(payload: { id: number }) {
    const { id } = payload;
    const Selecao = await this.selecaoRepository.findOneBy({ id });
    if (!Selecao) {
      throw new UnauthorizedException('Seleção  não encontrada');
    }

    return Selecao;
  }
}
