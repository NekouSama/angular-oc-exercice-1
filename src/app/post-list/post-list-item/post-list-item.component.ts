import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostService) { }

  ngOnInit() {
  }

  addLove(){
    this.post.loveIts++;
    this.postsService.emitPostsSubject()
    this.postsService.savePostToServer()
  }

  removeLove(){
    this.post.loveIts--;
    this.postsService.savePostToServer()
    this.postsService.emitPostsSubject()
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post)
  }

}
