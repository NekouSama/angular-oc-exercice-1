import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PostService } from '../services/post.service';
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[]
  postSubscription: Subscription;

  constructor(private postsService: PostService,private router: Router) { }
  
  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.postsService.getPostFromServer();
    this.postsService.emitPostsSubject();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new'])
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe()
  }

}