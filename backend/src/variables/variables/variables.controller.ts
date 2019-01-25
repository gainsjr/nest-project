import { Controller, Get, Post, Put, Patch, Param, Body, Delete } from '@nestjs/common';
import { VariablesService } from './variables.service';
import { Variable } from './variable.interface';


@Controller('variables')
export class VariablesController {
constructor (private readonly service:VariablesService){}
  @Post()
  async create(@Body()param: Variable) {
    this.service.create(param);
    return `This action adds a new var ${param.name}`;
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Put(':id')
  update(@Param('id') id:number, @Body()param: Variable) {
    var newValue = this.service.findAll();
    this.service.update(id, param);
    return `This action updates a #${id} variable , new name is ${newValue[id].name}`;
  }

  @Patch(':id')
  updateOne(@Param('id') id:number, @Body()param: Variable) {
    this.service.updateOne(id, param);
    return `This action updates a #${id} variable`;
  }

  @Delete(':id')
  delete(@Param('id') id:number) {
    this.service.delete(id);
    return `complete delete #${id}`;
  }
}
