import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";
import { ArchiveService } from "../../services";
import { Like, User } from "../../../core/types";
import { Image } from "../../../core/types";

@Component({
  selector: 'app-archive-screen',
  templateUrl: './archive-screen.component.html',
  styleUrls: ['./archive-screen.component.css']
})
export class ArchiveScreenComponent implements OnInit {
  protected safeImages: Image[] = [];
  protected likedImages: string[] = [];
  protected currentUser: User = { id: 0, name: '', email: '', password: '', admin: false };
  protected like: Like = { userId: 0, imageId: 0 };
  protected loading = true;
  protected showAll = true;
  protected isAuthenticated = false;

  constructor(private router: Router,
              private archiveService: ArchiveService) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.isAuthenticated = !!this.currentUser.id;

    if (this.isAuthenticated) {
      forkJoin({
        allImages: this.archiveService.getImages(),
        likedImages: this.archiveService.getLikedImagesByUser(this.currentUser.id),
      }).subscribe(
        ({allImages, likedImages}) => {
          this.safeImages = allImages.map((image: any) => ({
            ...image,
            liked: likedImages.some((likedImage: any) => likedImage === image.url)
          }));
        },
        (error: any) => {
          console.error('Error adding images:', error);
        }
      );
    }
    else {
      this.archiveService.getImages().subscribe(
        (images: any) => {
          this.safeImages = images.map((image: any) => (image));
        },
        (error: any) => {
          console.error('Error adding images:', error);
        }
      );
    }

    this.loading = false;
  }

  changeHeart(image: Image) {
    if (this.currentUser) {
      this.like.userId = this.currentUser.id;
      this.like.imageId = image.id;
      this.archiveService.createLike(this.like).subscribe(
        (like) => {},
        (error) => {
          console.error('Create like failed:', error);
        })
    }

    image.liked = !image.liked;
  }

  showLikedImages() {
    this.archiveService.getLikedImagesByUser(this.currentUser.id).subscribe(
      (likedImages: any) => {
        this.likedImages = likedImages;
      },
      (error) => {
        console.error('Error adding liked images:', error);
      }
    );

    this.changeView();
  }

  private changeView() {
    this.showAll = !this.showAll;
  }
}
