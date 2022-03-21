import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstabelecimentoService } from '../services/estabelecimento.service';
import { Estabelecimento } from '../shared/estabelecimento';

@Component({
  selector: 'app-estabelecimento-form',
  templateUrl: './estabelecimento-form.component.html',
  styleUrls: ['./estabelecimento-form.component.css']
})
export class EstabelecimentoFormComponent implements OnInit, OnDestroy {

  estabelecimento: Estabelecimento = new Estabelecimento();
  status: string = '';
  subscriptions: Array<Subscription> = [];

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private route: ActivatedRoute
  ) { }

  saveEstabelecimento() :void {
    let subscription: Subscription;

    if (this.estabelecimento.estabelecimento_id === undefined) {
      subscription = this.estabelecimentoService.saveEstabelecimento(this.estabelecimento).subscribe((data) => {
        this.estabelecimento = new Estabelecimento();
        this.status = data.status.toString();
      });
    } else {
      subscription = this.estabelecimentoService.
        updateEstabelecimento(this.estabelecimento.estabelecimento_id, this.estabelecimento).
        subscribe((data) => {
          this.status = data.status.toString();
        });
    }

    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    let subscription: Subscription;

    subscription = this.route.params.subscribe((params) => {
      let id = params['id'];

      if (id !== undefined) {
        let subscription: Subscription;

        subscription = this.estabelecimentoService.getEstabelecimento(id).subscribe((data: Estabelecimento) => {
          this.estabelecimento = data;
        });

        this.subscriptions.push(subscription);
      }
    });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

}
