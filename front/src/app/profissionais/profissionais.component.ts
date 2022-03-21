import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfissionalService } from '../services/profissional.service';
import { Profissional } from '../shared/profissional';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit, OnDestroy {

  profissionais: Array<Profissional> = [];
  subscriptions: Array<Subscription> = [];

  constructor(
    private profissionalService: ProfissionalService
  ) { }

  updateProfissionais(): void {
    let subscription: Subscription;

    subscription = this.profissionalService.listProfissionais().subscribe(
      (data: Array<Profissional>) =>  this.profissionais = data
    );

    this.subscriptions.push(subscription);
  }

  deleteProfissional(id: number): void {
    let subscription: Subscription;

    subscription = this.profissionalService.deleteProfissional(id).subscribe((data) => {
      if (data.status === 204) {
        this.profissionais = this.profissionais.filter(
          (pro) => pro.profissional_id !== id
        );
      }
    });

    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.updateProfissionais();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
