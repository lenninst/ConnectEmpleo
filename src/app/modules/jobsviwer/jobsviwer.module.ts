import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsPagesComponent } from './jobs-pages/jobs-pages.component';
import { IntroPagesComponent } from './intro-pages/intro-pages.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';



@NgModule({
  declarations: [
    JobsPagesComponent,
    IntroPagesComponent
  ],
  providers: [
    ApiService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    JobsPagesComponent,
    IntroPagesComponent,
  ]
})
export class JobsviwerModule { }
