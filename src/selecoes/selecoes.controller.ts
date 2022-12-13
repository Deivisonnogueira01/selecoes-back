import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  // UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { SelecaoService } from './selecoes.service';


@Controller('selecao')
export class SelecaoController {
  constructor(private readonly SelecaoService: SelecaoService) {}

 /* @Post()
  create(@Body() createUserDto: CreateSelecaoDto) {
    return this.SelecaoService.create(createUserDto);
  }*/

  @Get()
  findAll() {
    return this.SelecaoService.findAll();
  }

  @Get('/list/:id')
  findOne(@Param('id') id: number) {
    return this.SelecaoService.findOne(id);
  }



  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.SelecaoService.remove(id);
    return {
      message: 'Seleção removido com sucesso!',
    };
  }
}
