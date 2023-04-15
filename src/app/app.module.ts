import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';//add mano
import { AuthorComponent } from './component/author/author.component';
import { AuthorListarComponent } from './component/author/author-listar/author-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CreateEditComponent } from './component/author/create-edit/create-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorListarComponent,
    CreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//add mano
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
