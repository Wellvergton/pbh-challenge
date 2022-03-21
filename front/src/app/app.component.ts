import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Profissionais',
        routerLink: 'profissionais'
      },
      {
        label: 'Novo profissional',
        routerLink: 'cadastro-profissional'
      },
      {
        label: 'Estabelecimentos',
        routerLink: 'estabelecimentos'
      },
      {
        label: 'Novo Estabelecimento',
        routerLink: 'cadastro-estabelecimento'
      }
    ];
  }
}
