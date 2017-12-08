import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './header/nav/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { InitComponent } from './views/init/init.component';
import { SignupComponent } from './main/signup/signup.component';
import { AuthComponent } from './views/auth/auth.component';
import { MenuComponent } from './header/nav/menu/menu.component';
import { RecipesComponent } from './views/recipes/recipes.component';
import { ItemComponent } from './main/item/item.component';
import { RecipeComponent } from './main/recipe/recipe.component';

import { MainService } from './services/main.service';
import { AuthService } from './services/auth.service';
import { SlidebarComponent } from './header/nav/menu/slidebar/slidebar.component';

const appRoutes: Routes = [
  {path: '', component: InitComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: AuthComponent},
  {path: 'recipes', component: RecipesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    InitComponent,
    SignupComponent,
    AuthComponent,
    MenuComponent,
    RecipesComponent,
    ItemComponent,
    RecipeComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
