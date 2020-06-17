import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/services-AUX/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default-pages',
  templateUrl: './default-pages.component.html',
  styleUrls: ['./default-pages.component.scss']
})
export class DefaultPagesComponent implements OnInit {

  isHomeActivatedRoute: boolean;
  constructor(
    public menuService: MenuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const snapshot = this.route.snapshot.firstChild;
    this.isHomeActivatedRoute = (snapshot && snapshot.routeConfig.path === '') ? true : false;
  }

}
