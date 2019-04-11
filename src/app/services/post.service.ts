import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient, private router: Router) { }

  emitPostsSubject() {
    this.postsSubject.next(this.posts)
  }

  savePostToServer() {
    this.httpClient
      .put('https://http-client-demo-access.firebaseio.com/post.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
          this.getPostFromServer()
          this.router.navigate(['/posts'])
        },
        (error) => {
          console.log('Erreur de sauvegarde !' + error);
        }
      )
  }

  getPostFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-access.firebaseio.com/post.json')
      .subscribe(
        (response) => {
          this.posts = response || [];
          this.emitPostsSubject();
        },
        (error) => {
          console.log('Erreur de chargement !' + error);
        }
      )
  }

  addNewPost(post: Post) {
    this.posts.push(post)
    this.emitPostsSubject()
    this.savePostToServer()
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true
        }
      }
    )
    this.posts.splice(postIndexToRemove, 1)
    this.savePostToServer()
    this.emitPostsSubject()
  }

}
