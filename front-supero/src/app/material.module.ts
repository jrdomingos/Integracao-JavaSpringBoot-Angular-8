import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [DragDropModule, MatRadioModule,MatDialogModule, CommonModule,MatMenuModule,MatButtonModule,MatIconModule, MatToolbarModule, MatCardModule, MatCardModule, MatInputModule, MatSelectModule, MatTableModule,MatGridListModule     ],
  exports:[DragDropModule, MatRadioModule, MatDialogModule, MatMenuModule,MatButtonModule,MatIconModule, MatToolbarModule, MatCardModule, MatCardModule, MatInputModule, MatSelectModule, MatTableModule,MatGridListModule]
})
export class MaterialModule { }