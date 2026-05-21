export type Libros = {
  data: Libro[];
};

export type Libro = {
  id: number;
  Year: number;
  Title: string;
  handle: string;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes: string[];
  created_at: Date;
  villains: Villain[];
};

export type Villain = {
  name: string;
  url: string;
};
