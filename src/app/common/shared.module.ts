import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PanelComponent,
  ],
  providers: [
  ],
  exports: [
    PanelComponent,
  ],
})
export class SharedModule {}
