import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { HeaderComponent } from './header/header.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ImagemComponent } from './imagem/imagem.component';

const routes: Routes = [
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'Header', component: HeaderComponent},
  {path: 'imagem', component: ImagemComponent},
  {path: 'listar', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
