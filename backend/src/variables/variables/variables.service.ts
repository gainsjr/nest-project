import { Injectable } from '@nestjs/common';
import { Variable } from './variable.interface';

@Injectable()
export class VariablesService {
  private variables: Variable[] = [];
  create(variable: Variable) {
    this.variables.push(variable);
  }

  findAll(): Variable[] {
    return this.variables;
  }

  update(id: number, newValue: Variable){
    this.variables[id]  = newValue;
  }

  updateOne(id: number, newValue: Variable){
    if(newValue.name != null) {
      this.variables[id].name  = newValue.name;
    }
    if(newValue.age != null) {
      this.variables[id].age  = newValue.age;
    }
  }

  delete(id: number){
    this.variables.splice(id, 1);
  }
}

