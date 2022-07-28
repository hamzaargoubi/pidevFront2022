import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Model/Blog';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css']
})
export class FormBlogComponent implements OnInit {
  blog: Blog;
  imageFolderPath="././assets/img/";
currentFile: File;
finalImageName;
selectedFiles: FileList;
imagePath:File;
userFile;
 messages:string;
 imgUrl:any;
  constructor(private blogService : PostServiceService) { }

  ngOnInit(): void {
    this.blog=new Blog();
  }
  save(){
    // this.blogService.addPost(this.blog).subscribe();
    this.currentFile = this.selectedFiles.item(0);
    console.log(this.currentFile.name);
    this.blogService.addPost(this.blog,this.currentFile).subscribe(
      event => {
        this.finalImageName = this.currentFile.name;
      },
      err => {
      console.log(err);
      });
  }
  onSelectFile(event){
    if (event.target.files.length > 0)
    {
      this.selectedFiles = event.target.files;
      const file=event.target.files[0];
      this.userFile=file
      console.log("userfile==" ,this.userFile.Name);
      var mimeType=event.target.files[0].type;
      if (mimeType.match(/image\/*/)==null){
        this.messages="seules les images sont supportées";
        return;
      }
      var reader = new FileReader();

      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(event) =>{this.imgUrl=reader.result;}
      }
    else{
    }
  }
  }
  
