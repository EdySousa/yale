import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/services-AUX/menu.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  categories = ['MULHERES', 'HOMENS', 'CRIANÇAS', 'RELÓGIOS', 'TELEMÓVEIS'];

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
