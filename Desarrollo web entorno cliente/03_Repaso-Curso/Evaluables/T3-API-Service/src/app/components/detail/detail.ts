import { Component } from '@angular/core';
import { Team } from '../team/team';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  team?: Team = undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.team= this.router.getCurrentNavigation()?.extras.state?.['team']

    if (typeof history !== 'undefined') {
      this.team = history.state.team;
      console.log('Objeto team en DetailComponent:', this.team);
    }
  }
}
