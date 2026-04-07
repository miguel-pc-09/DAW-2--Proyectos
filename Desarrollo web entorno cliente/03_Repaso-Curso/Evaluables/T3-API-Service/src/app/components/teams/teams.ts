import { Component } from '@angular/core';
import { Team } from '../team/team';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-teams',
  imports: [Team],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  teams?: Team[];

  constructor(private dataService: DataService) {
    this.dataService.getAllTeamsURL().subscribe((data) => (this.teams = data.teams));
  }
}
