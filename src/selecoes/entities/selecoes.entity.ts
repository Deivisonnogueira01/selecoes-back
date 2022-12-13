import {
  Column, Entity, PrimaryGeneratedColumn 
} from 'typeorm';

@Entity('tbl_selecao')
export class Selecao {

  @PrimaryGeneratedColumn('uuid')
  id: number; //

  @Column()
  nomeSelecao: string;

  @Column()
  qtdTitulos: string;

  @Column()
  informacoes: string;
  

}
