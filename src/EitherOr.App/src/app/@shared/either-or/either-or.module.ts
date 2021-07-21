import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EitherOrComponent } from './either-or.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    EitherOrComponent
  ],
  exports: [
    EitherOrComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class EitherOrModule { }
