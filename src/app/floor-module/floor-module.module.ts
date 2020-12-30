import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStructureComponent } from './main-structure-component/main-structure-component.component';
import { FurnitureModule } from '../furniture-module/furniture-module.module';

@NgModule({
  declarations: [MainStructureComponent],
  imports: [CommonModule, FurnitureModule],
  exports: [MainStructureComponent],
})
export class FloorModule {}
