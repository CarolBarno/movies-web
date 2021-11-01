import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMoviesComponent } from './components/category-movies/category-movies.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'category', component: CategoryMoviesComponent },
  { path: 'details/:title', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
