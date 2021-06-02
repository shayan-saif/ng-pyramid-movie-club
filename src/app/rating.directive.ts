import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRating]'
})
export class RatingDirective implements OnInit {
  @Input() appRating: number;
  
  colors: string[] = [
    "#69B34C",
    "#ACB334",
    "#FAB733",
    "#FF8E15",
    "#FF4E11",
    "#FF0D0D"
  ]

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

    if (this.appRating >= 9) {
      this.el.nativeElement.style.backgroundColor = this.colors[0];
    } else if (this.appRating >= 7) {
      this.el.nativeElement.style.backgroundColor = this.colors[1];
    } else if (this.appRating >= 5) {
      this.el.nativeElement.style.backgroundColor = this.colors[2];
    } else if (this.appRating >= 4) {
      this.el.nativeElement.style.backgroundColor = this.colors[3];
    } else if (this.appRating >= 3) {
      this.el.nativeElement.style.backgroundColor = this.colors[4];
    } else {
      this.el.nativeElement.style.backgroundColor = this.colors[5];
    }
  }

}
