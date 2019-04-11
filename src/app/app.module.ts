import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { Routes, RouterModule } from '@angular/router';
import { PostListNewComponent } from './post-list/post-list-new/post-list-new.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { HeaderComponent } from './header/header.component';

const appRoutes:Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'posts/new', component: PostListNewComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PostListNewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
