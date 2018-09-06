import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesPublicComponent } from './components/movies/movies-public/movies-public.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesPublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'movies', component: MoviesComponent, canActivate: [AuthGuard]},
      {path: 'movies-public', component: MoviesPublicComponent},
    ])
  ],
  providers: [AuthService, AuthGuard, EventService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
