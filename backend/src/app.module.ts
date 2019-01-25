import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VariablesController } from './variables/variables/variables.controller';
import { VariablesService } from './variables/variables/variables.service';

@Module({
  imports: [],
  controllers: [AppController, VariablesController],
  providers: [AppService, VariablesService],
})
export class AppModule {}
