import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MymoduleComponent } from './mymodule.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MymoduleComponent],
  exports: [MymoduleComponent]
})
export class MymoduleModule { }
