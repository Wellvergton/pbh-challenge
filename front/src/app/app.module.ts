import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';

import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { ProfissionalFormComponent } from './profissional-form/profissional-form.component';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { PhonePipe } from './pipes/phone.pipe';
import { EstabelecimentoFormComponent } from './estabelecimento-form/estabelecimento-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfissionaisComponent,
    ProfissionalFormComponent,
    EstabelecimentosComponent,
    PhonePipe,
    EstabelecimentoFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
