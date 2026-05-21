export interface RespuestaEquipos {
  teams: Equipo[];
}

export interface Equipo {
  idTeam: string;
  strTeam: string;
  strBadge: string;
}
