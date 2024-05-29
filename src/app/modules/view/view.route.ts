import { RouterModule, Routes } from "@angular/router";
import { CardsComponent } from "./components/cards/cards.component";
import { NgModule } from "@angular/core";


import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./components/cards/details/details.component";
import { RequirementsComponent } from "./components/cards/requirements/requirements.component";
import { SavedComponent } from "./components/saved/saved.component";
import { ChoiceComponent } from "./components/choice/choice.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'recommendations'
      },
      {
        path: 'recommendations', component: CardsComponent,
        children: [
          {
            path: '', pathMatch: 'full', redirectTo: 'details'
          },
          {
            path: 'details', component: DetailsComponent
          },
          {
            path: 'requirements', component: RequirementsComponent
          },
        ]
      },
      {
        path: 'choice', component: ChoiceComponent,
      },
      {
        path: 'saved', component: SavedComponent,
      }

    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class viewRouting { }
