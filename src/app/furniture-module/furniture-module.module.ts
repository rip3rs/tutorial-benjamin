import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoorComponent } from './door-component/door-component.component';
import { WindowComponent } from './window-component/window-component.component';

@NgModule({
  declarations: [DoorComponent, WindowComponent],
  imports: [CommonModule],
  exports: [DoorComponent, WindowComponent],
})
export class FurnitureModule {}
