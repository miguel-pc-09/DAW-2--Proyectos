import { Component } from '@angular/core';
import { Post, PostsReponse } from '../../model/post';
import { ApiPosts } from '../../services/api-posts';

@Component({
  selector: 'app-post-fetch',
  imports: [],
  templateUrl: './post-fetch.html',
  styleUrl: './post-fetch.css',
})
export class PostFetch {
  posts: Post[] = [];

  constructor(private servicioPost: ApiPosts) {
    this.servicioPost.getAllPost().subscribe({
      next: (res: PostsReponse) => {
        this.posts = res.posts;
      }, // Si todo salio bien
      error: (err) => {
        /* Cuadro de dialogo de sweetalert indicando que no hay fallo */
      }, // Si hubo algun error
    });
  }
}
