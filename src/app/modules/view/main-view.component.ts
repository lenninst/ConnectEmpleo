import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-view.component.html',
})
export class MainViewComponent {

  //FIX: se planea implementar rutas dinamicas
  username: string = '';

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {

    // this.username = this.route.snapshot.paramMap.get('username');

  }





}
