import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  @Input() team?: Team | undefined;

  constructor(private router: Router) {}

  verDetalles() {
    console.log(this.team);
    this.router.navigate(['/detail'], { state: { team: this.team } });
  }
}
