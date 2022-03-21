import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EstabelecimentoService } from '../services/estabelecimento.service';
import { Estabelecimento } from '../shared/estabelecimento';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html',
  styleUrls: ['./estabelecimentos.component.css']
})
export class EstabelecimentosComponent implements OnInit, OnDestroy {

  estabelecimentos: Array<Estabelecimento> = [];
  subscriptions: Array<Subscription> = [];

  constructor(private estabelecimentoService: EstabelecimentoService) { }

  updateEstabelecimentos(): void {
    let subscription: Subscription;

    subscription = this.estabelecimentoService.listEstabelecimentos().subscribe(
      (data: Array<Estabelecimento>) => this.estabelecimentos = data
    );

    this.subscriptions.push(subscription);
  }

  deleteEstabelecimento(id: number): void {
    let subscription: Subscription;

    subscription = this.estabelecimentoService.deleteEstabelecimento(id).subscribe((data) => {
      if (data.status === 204) {
        this.estabelecimentos = this.estabelecimentos.filter(
          (est) => est.estabelecimento_id !== id
        );
      }
    });

    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.updateEstabelecimentos();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
