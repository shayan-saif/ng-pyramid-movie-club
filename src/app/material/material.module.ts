import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatBadgeModule } from '@angular/material/badge';

const material = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatBadgeModule
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
