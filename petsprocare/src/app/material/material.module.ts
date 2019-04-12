import { NgModule } from '@angular/core';
import * as Material from '@angular/material';


const MaterialComponents = [
  Material.MatToolbarModule,
  Material.MatFormFieldModule,
  Material.MatInputModule,
  Material.MatButtonModule,
  Material.MatDialogModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
