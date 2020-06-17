import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './reusable-components/header/header.component';
import { DefaultPagesComponent } from './pages/default-pages/default-pages.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './reusable-components/footer/footer.component';
import { SidenavComponent } from './reusable-components/sidenav/sidenav.component';
import { SidenavMenuComponent } from './reusable-components/sidenav/sidenav-menu/sidenav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultPagesComponent,
    HomeComponent,
    FooterComponent,
    SidenavComponent,
    SidenavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
