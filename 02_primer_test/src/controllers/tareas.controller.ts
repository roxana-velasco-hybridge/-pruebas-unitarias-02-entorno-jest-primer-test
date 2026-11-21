import { Request, Response } from 'express';

const tareas = [
  {
    id: 1,
    titulo: 'Estudiar pruebas',
    completada: false,
    descripcion: 'Estudiar pruebas unitarias usando Jest',
  },
  {
    id: 2,
    titulo: 'Hacer ejercicio',
    completada: true,
    descripcion: 'Correr 30 minutos a 10km/h',
  },
];

export function obtenerTareas(_req: Request, res: Response): void {
  res.json(tareas);
}