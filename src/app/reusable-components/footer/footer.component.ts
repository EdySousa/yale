import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isOpenFirst: boolean; isOpenSecond: boolean; isOpenThird: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  open(column: number) {
    switch (column) {
      case 1:
        this.isOpenFirst = !this.isOpenFirst;
        this.isOpenSecond = false;
        this.isOpenThird = false;
        break;
      case 2:
        this.isOpenSecond = !this.isOpenSecond;
        this.isOpenFirst = false;
        this.isOpenThird = false;
        break;
      case 3:
        this.isOpenThird = !this.isOpenThird;
        this.isOpenFirst = false;
        this.isOpenSecond = false;
        break;
      default:
        break;
    }
  }

}
