import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AuthpageComponent } from './authpage/authpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { FilterpageComponent } from './filterpage/filterpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthpageComponent,
    HomepageComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MovieinfoComponent,
    SearchpageComponent,
    FilterpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: AuthpageComponent},
      {path: 'homepage', component:HomepageComponent},
      {path: 'movieinfo/:id', component:MovieinfoComponent},
      {path: 'searchpage/:key', component:SearchpageComponent},
      {path: 'filterpage/:type', component:FilterpageComponent},
      {path:'', redirectTo: 'homepage', pathMatch:'full'},
      {path:'**', redirectTo: 'homepage', pathMatch:'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
