export interface RespuestaRecetas {
  recipes: Receta[];
}

export interface Receta {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  prepTimeMinutes: number;
}
