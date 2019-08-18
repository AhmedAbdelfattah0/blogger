import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  blogs: Blogpost;
  error: {};

  constructor(
    private titleService: Title,
    private blogpostService: BlogpostService
    ) { }

  ngOnInit() {

 
    this.blogpostService.getBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
  }
}
