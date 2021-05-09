import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

const material = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatBadgeModule,
  MatChipsModule,
  MatDividerModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
