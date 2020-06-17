import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @Output() visibleSearch = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.visibleSearch.next(true);
  }

}
