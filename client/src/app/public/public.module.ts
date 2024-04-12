import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];

@NgModule({
  declarations: [PublicComponent, HomeComponent, AboutComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  bootstrap: [PublicComponent],
})
export class PublicModule {}
