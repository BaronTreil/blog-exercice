import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  postList: Array<Post> = [];
  loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed neque at enim porta scelerisque et a mi. Integer ultrices sed odio non scelerisque. Sed egestas quam nec purus rhoncus.";

  postSubject = new Subject<any[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postSubject.next(this.postList.slice());
  }

  addPost(post: Post) {
    this.postList.push(post);
    this.savePosts();
  }

  deletePost(post: Post) {
    this.postList.splice(this.postList.indexOf(post), 1);
    this.savePosts();
   
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.postList);
    this.emitPosts();
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value',
        (data: DataSnapshot) => {
          this.postList = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

}
