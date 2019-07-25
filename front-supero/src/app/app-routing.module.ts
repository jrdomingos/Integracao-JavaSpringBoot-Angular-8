import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { CepComponent } from './cep/cep.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {  
    path:'home',
    component: HomeComponent
  },
  {  
    path:'footer',
    component: FooterComponent
  },
  {  
    path:'drag',
    component: DragDropComponent
  },
  {  
    path:'cep',
    component: CepComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule, MaterialModule, FlexLayoutModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  exports: [RouterModule, MaterialModule, FooterComponent, DragDropComponent,CepComponent],
  declarations: [HomeComponent, FooterComponent, DragDropComponent, CepComponent],
  providers:[TaskService]
})
export class AppRoutingModule { }
