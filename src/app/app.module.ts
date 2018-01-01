import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './header/nav/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './main/signup/signup.component';
import { AuthComponent } from './views/auth/auth.component';
import { MenuComponent } from './header/nav/menu/menu.component';
import { RecipesComponent } from './views/recipes/recipes.component';
import { ItemComponent } from './main/item/item.component';
import { RecipeComponent } from './main/recipe/recipe.component';

import { MainService } from './services/main.service';
import { AuthService } from './services/auth.service';
import { SlidebarComponent } from './header/nav/menu/slidebar/slidebar.component';
import { SearchrecipesComponent } from './views/searchrecipes/searchrecipes.component';
import { SlidebarService } from './services/slidebar.service';
import { AddAgentComponent } from './views/add-agent/add-agent.component';
import { ModalComponent } from './main/modal/modal.component';
import { ProductComponent } from './main/product/product.component';
import { HelpComponent } from './views/help/help.component';
import { AddProductModalComponent } from './main/add-product-modal/add-product-modal.component';
import { UpdateProductModalComponent } from './main/update-product-modal/update-product-modal.component';
import { SearchModalComponent } from './main/search-modal/search-modal.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: AuthComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'searchrecipes', component: SearchrecipesComponent},
  {path: 'newAgent', component: AddAgentComponent},
  {path: 'improveapp', component: HelpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AuthComponent,
    MenuComponent,
    RecipesComponent,
    ItemComponent,
    RecipeComponent,
    SlidebarComponent,
    SearchrecipesComponent,
    AddAgentComponent,
    ModalComponent,
    ProductComponent,
    HelpComponent,
    AddProductModalComponent,
    UpdateProductModalComponent,
    SearchModalComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    MainService,
    SlidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
