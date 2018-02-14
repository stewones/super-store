import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloSdaComponent } from './hello-sda/hello-sda.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloSdaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
