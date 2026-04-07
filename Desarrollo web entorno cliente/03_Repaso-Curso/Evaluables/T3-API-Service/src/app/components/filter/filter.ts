import { Component } from '@angular/core';
import { Team } from '../team/team';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  equiposFiltrados: Team[] = [];

  seleccionCapacidad: string = '';

  constructor(private dataService: DataService) {}

  filtradoCapacidad() {
    //AQUI quiero el metodo para filtrar por capacidad de estadio intStadiumCapacity
    this.equiposFiltrados = this.dataService.getTeamsByCapacity(this.seleccionCapacidad);
    //ordenamos con sort
    this.equiposFiltrados.sort((a, b) => {
      return parseInt(a.intStadiumCapacity) - parseInt(b.intStadiumCapacity);
    });
  }
}
