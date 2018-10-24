import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(private postService: PostServiceService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.newPostForm = this.formBuilder.group({
        title : ['', Validators.required],
        content : ['', Validators.required]
    })
  }

  onSavePost(){
    console.log('adding a post...');
    const newPost = new Post(this.newPostForm.value['title'], this.newPostForm.value['content'], 0);
    this.postService.addPost(newPost);

    this.router.navigate(['posts']);
  }

}
