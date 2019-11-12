import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoheaderComponent } from './todoheader/todoheader.component';
import { TodoinputComponent } from './todoinput/todoinput.component';
import { TodolistComponent } from './todolist/todolist.component';
import{MatToolbarModule, MatCardModule, MatFormField, MatFormFieldModule, MatInputModule, MatRadioModule, MatTabsModule, MatGridListModule, MatListModule, MatBadgeModule, MatCheckboxModule, MatButtonModule, MatIconModule } from '@angular/material';
import{FormsModule}from'@angular/forms'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoheaderComponent,
    TodoinputComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
