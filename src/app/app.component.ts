import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-activite-un';

  posts = [
    { 
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident quisquam asperiores voluptates et, iure quaerat sapiente accusamus vel architecto, aliquid cumque error sint fugit esse tenetur rem totam aut.',
      loveIts: 1,
      created_at: '2016-01-12T13:30:46.358+05:00'
    },
    { 
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident quisquam asperiores voluptates et, iure quaerat sapiente accusamus vel architecto, aliquid cumque error sint fugit esse tenetur rem totam aut.',
      loveIts: -1,
      created_at: '2016-01-12T13:30:46.358+05:00'
    },
    { 
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident quisquam asperiores voluptates et, iure quaerat sapiente accusamus vel architecto, aliquid cumque error sint fugit esse tenetur rem totam aut.',
      loveIts: 0,
      created_at: '2016-01-12T13:30:46.358+05:00'
    }
  ]
}
