import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  // image = [
  //   'assets/image/cat-01.jpg',
  //   'assets/image/cat-02.jpg',
  //   'assets/image/cat-03.jpg',
  //   'assets/image/cat-04.jpg',
  //   'assets/image/cat-05.jpg',
  //   'assets/image/cat-06.jpg',
  //   'assets/image/cat-07.jpg',
  //   'assets/image/cat-08.jpg',
  // ];
  // nCounter = 0;
  // name = 'id';
  // set = 'assets/image/cat-01.jpg';
  // getData(e: any) {
  //   console.log(e);
  // }

  // nextItem() {
  //   this.nCounter = this.nCounter + 1;
  //   this.nCounter = this.nCounter % this.image.length;
  //   console.log(this.nCounter);
  //   return this.image[this.nCounter];
  // }

  // prevItem() {
  //   if (this.nCounter === 0) {
  //     // i would become 0
  //     this.nCounter = this.image.length; // so put it at the other end of the array
  //   }
  //   this.nCounter = this.nCounter - 1; // decrease by one
  //   return this.image[this.nCounter]; // give us back the item of where we are now
  // }
  // next(e: any) {
  //   if (this.nCounter == this.image.length - 1) {
  //     e.target.setAttribute('disabled', '');
  //   } else {
  //     e.target.removeAttribute('disabled', '');
  //     this.set = this.nextItem();
  //   }
  // }
  // prev() {
  //   this.set = this.prevItem();
  // }
  // slide() {

  // }

  // stop() {}
  image: any = [
    'cat-01.jpg',
    'cat-02.jpg',
    'cat-03.jpg',
    'cat-04.jpg',
    'cat-05.jpg',
    'cat-06.jpg',
    'cat-07.jpg',
    'cat-08.jpg',
  ];
  src = 'assets/image/cat-01.jpg';
  index = 0;

  next() {
    if (this.index != this.image.length - 1) {
      this.src = 'assets/image/';
      this.index++;
      this.src += this.image[this.index];
    }
  }
  previous() {
    if (this.index != 0) {
      this.src = 'assets/image/';
      this.index--;
      this.src += this.image[this.index];
    }
  }
  slide() {
    this.index = 0;
    this.src = 'assets/image/';
    this.src += this.image[this.index];
    setInterval(() => {
      if (this.index == this.image.length - 1) {
        this.index = -1;
      }
      this.next();
    }, 500);
  }

  stop() {
    this.image = stop();
  }
}
