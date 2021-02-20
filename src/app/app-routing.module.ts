import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './orders/cart/cart.component';
import { WishlistComponent } from './orders/wishlist/wishlist.component';
import { CategorySearchComponent } from './search/category-search/category-search.component';
import { SearchComponent } from './search/search.component';
import { SellItemComponent } from './sell-item/sell-item.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:category', component: CategorySearchComponent},
  {path: 'profile', component: UserComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'cart', component: CartComponent},
  {path: 'sell', component: SellItemComponent},
  {path: ' ', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
