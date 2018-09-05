import { Component } from '@angular/core';
import { ArrayType } from '@angular/compiler';

class  Post{
  title : string;
  content : string;
  loveIts: number;
  created_at: Date;

  constructor(title, content, initialLike){
    this.title = title;
    this.content = content;
    this.loveIts = initialLike;
    this.created_at = new Date();
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : 'Blog';

  postList : Array<Post> = [];
  loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed neque at enim porta scelerisque et a mi. Integer ultrices sed odio non scelerisque. Sed egestas quam nec purus rhoncus.";
  
  constructor(){
    this.postList.push(new Post("Mon premier post", this.loreIpsum, 1));
    this.postList.push(new Post("Mon deuxieme post", this.loreIpsum, -1));
    this.postList.push(new Post("Encore un post", this.loreIpsum, 0));
  }
}
