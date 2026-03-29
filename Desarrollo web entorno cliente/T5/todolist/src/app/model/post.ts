/* Crear un modelo que coincida con el de la peticion json */
/* Esta seria la primera forma creandola manualmente para que coincida con el json. Aqui usamos la erramienta quicktipe io */
/* export interface post {

}

export interface postresponse {
  posts: post[];
  total: number;
  skip: number;
  limit: number;
} */

/* con la web quicktype. Recordar desmarcar verify y marcar interfaces only. */
export interface PostsReponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface Reactions {
  likes: number;
  dislikes: number;
}
