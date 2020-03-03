import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FilterComponent} from './components/filter/filter.component';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from './components/post/post.component';
import {PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG , PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {CommentComponent} from './components/comment/comment.component';

export const COMPONENTS = [
  AppComponent,
  FilterComponent,
  PostComponent,
  CommentComponent
];

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule
  ],
  providers: [
    AppService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
