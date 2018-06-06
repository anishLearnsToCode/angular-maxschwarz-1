import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { ServerControlComponent } from './server-control/server-control.component';
import { ServerArrayComponent } from './server-array/server-array.component';
import { InfoContainerComponent } from './info-container/info-container.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './Recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './Recipes/recipe-detail/recipe-detail.component';
import { RecipieComponent } from './Recipes/recipiesList/recipie/recipie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shoppingList/shopping-item/shopping-item.component';
import { ShoppingEditComponent } from './shoppingList/shopping-edit/shopping-edit.component';
=======
>>>>>>> parent of 834d82f... crated Header component under app root directory
=======
>>>>>>> parent of 834d82f... crated Header component under app root directory

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LoginPageComponent,
    UserCreationComponent,
    ServerControlComponent,
    ServerArrayComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    InfoContainerComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipieComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    ShoppingEditComponent
=======
    InfoContainerComponent
>>>>>>> parent of 834d82f... crated Header component under app root directory
=======
    InfoContainerComponent
>>>>>>> parent of 834d82f... crated Header component under app root directory
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
