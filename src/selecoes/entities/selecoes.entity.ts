import {
  Column, Entity, PrimaryGeneratedColumn 
} from 'typeorm';

@Entity('tbl_Selecao')
export class Selecao {

  @PrimaryGeneratedColumn('uuid')
  id: number; //

  @Column()
  nomeSelecao: string;

  @Column()
  QtdTitulos: string;

  @Column()
  informacoes: string;
  

}
