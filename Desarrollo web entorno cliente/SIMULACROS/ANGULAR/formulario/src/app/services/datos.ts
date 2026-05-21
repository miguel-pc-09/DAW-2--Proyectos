import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class Datos {
  personas: Persona[] = [];

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
  }

  getPersonas(): Persona[] {
    return this.personas;
  }

  getPersonaById(id: number): Persona | undefined {
    return this.personas.find((persona) => persona.id == id);
  }
}
