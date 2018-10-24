import { Component, OnInit, Input } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post;
  constructor(private postService: PostServiceService) { }

  ngOnInit() {
  }

  upVote() {
    this.post.loveIts++;
    this.postService.savePosts();
  }

  downVote() {
    this.post.loveIts--;
    this.postService.savePosts();
  }

  removePost() {
    this.postService.deletePost(this.post);
  }
}
