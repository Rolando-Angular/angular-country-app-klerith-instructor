import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SharedModule { }
