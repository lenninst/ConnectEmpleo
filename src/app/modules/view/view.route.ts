import { RouterModule, Routes } from "@angular/router";
import { CardsComponent } from "./components/cards/cards.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: CardsComponent },
      { path: 'Cards', component: CardsComponent },

    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class viewRouting { }
