import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstabelecimentoFormComponent } from './estabelecimento-form/estabelecimento-form.component';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { ProfissionalFormComponent } from './profissional-form/profissional-form.component';

const routes: Routes = [
  { path: 'profissionais', component: ProfissionaisComponent },
  { path: 'cadastro-profissional',  component: ProfissionalFormComponent},
  { path: 'editar-profissional/:id',  component: ProfissionalFormComponent},
  { path: 'estabelecimentos', component: EstabelecimentosComponent },
  { path: 'cadastro-estabelecimento', component: EstabelecimentoFormComponent },
  { path: 'editar-estabelecimento/:id', component: EstabelecimentoFormComponent },
  { path: '', redirectTo: 'profissionais', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
