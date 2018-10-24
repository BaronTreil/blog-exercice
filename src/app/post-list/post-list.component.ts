import { Component, OnInit, Input } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Post } from '../models/Post.model';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: Post[];
  postSubscription: Subscription;
  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        console.log("Receiving " + posts.length + " posts.");
        this.postList = posts;
      }
    )

    this.postService.emitPosts();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();

    
  }


}
