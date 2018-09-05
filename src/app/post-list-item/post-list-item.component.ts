import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post;
  constructor() { }

  ngOnInit() {
  }

  upVote(){
    this.post.loveIts++;
  }

  downVote(){
    this.post.loveIts--;
  }
}
