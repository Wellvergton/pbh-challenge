import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstabelecimentoService } from '../services/estabelecimento.service';
import { ProfissionalService } from '../services/profissional.service';
import { Estabelecimento } from '../shared/estabelecimento';
import { Profissional } from '../shared/profissional';

@Component({
  selector: 'app-profissional-form',
  templateUrl: './profissional-form.component.html',
  styleUrls: ['./profissional-form.component.css']
})
export class ProfissionalFormComponent implements OnInit, OnDestroy {

  profissional: Profissional = new Profissional();
  estabelecimentos: Array<Estabelecimento> = [];
  status: string = '';
  subscriptions: Array<Subscription> = [];

  constructor(
    private profissionalService: ProfissionalService,
    private estabelecimentoService: EstabelecimentoService,
    private route: ActivatedRoute
  ) { }

  saveProfissional(): void {
    let subscription: Subscription;

    if (this.profissional.profissional_id === undefined) {
      subscription = this.profissionalService.saveProfissional(this.profissional).subscribe((data) => {
        this.profissional = new Profissional();
        this.status = data.status.toString();
      });
    } else {
      subscription = this.profissionalService.
        updateProfissional(this.profissional.profissional_id, this.profissional).
          subscribe((data) => {
          this.status = data.status.toString();
        });
    }

    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    let subscription: Subscription;

    subscription = this.estabelecimentoService.listEstabelecimentos().subscribe(
      (data: Array<Estabelecimento>) => this.estabelecimentos = data
    );

    this.subscriptions.push(subscription);

    subscription = this.route.params.subscribe((params) => {
      let id = params['id'];

      if (id !== undefined) {
        this.profissionalService.getProfissional(id).subscribe((data: Profissional) => {
          this.profissional = data;
        });
      }
    });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
