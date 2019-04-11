import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post.model';
import { SWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core/src/ivy_switch';

@Component({
  selector: 'app-post-list-new',
  templateUrl: './post-list-new.component.html',
  styleUrls: ['./post-list-new.component.scss']
})
export class PostListNewComponent implements OnInit {

  postForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private postsService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    this.postsService.addNewPost(newPost);
    return this.router.navigate(['/posts']);    
  }

}
