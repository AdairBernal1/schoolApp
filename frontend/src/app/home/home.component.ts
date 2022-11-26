import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: SlideInterface[] = [
    { url: '/assets/image-1.jpg', title: 'beach' },
    { url: '/assets/image-2.jpg', title: 'boat' },
    { url: '/assets/image-3.jpg', title: 'forest' },
    { url: '/assets/image-4.jpg', title: 'city' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
