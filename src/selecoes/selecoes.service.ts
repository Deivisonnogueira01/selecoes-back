import {
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateSelecaoDto } from './dto/update-selecao.dto';
import { Selecao } from './entities/selecoes.entity';

@Injectable()
export class SelecaoService {

  constructor(
    @InjectRepository(Selecao)
    private SelecaoRepository: Repository<Selecao>,
  ) {}


  async findAll(): Promise<Selecao[]> {
    try {
      return await this.SelecaoRepository.find();
    } catch (err) {
      console.log('Impossível buscar usuários');
      return null;
    }
  }

  async findOne(id: number): Promise<Selecao> {

    const Selecao = this.SelecaoRepository.createQueryBuilder('Selecao')
      .select(['Selecao.nome', 'Selecao.email'])
      .getOne();
    if (!Selecao) throw new NotFoundException('Selecao não encontrado');

    return Selecao;

  }

 
  async findByEmail(email: string): Promise<Selecao> {
    return await this.SelecaoRepository.findOneBy({ email });
  }
 


  async update(id: number, updateSelecaoDto: UpdateSelecaoDto) {

    const Selecao = await this.findOne(id);
    const { name, email} = updateSelecaoDto;
    Selecao.name = name ? name : Selecao.name;
    Selecao.email = email ? email : Selecao.email;
   
    try {
      await this.SelecaoRepository.save(Selecao);
      return Selecao;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }

  }

  async remove(SelecaoId: number) {

    const result = await this.SelecaoRepository.delete({ id: SelecaoId });
    if (result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado um usuário com o ID informado',
      );
    }

  }

}
