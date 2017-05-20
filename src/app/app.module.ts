import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { BuildingComponent } from './land/building/building.component';
import { ManageBarComponent } from './manage-bar/manage-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    BuildingComponent,
    ManageBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
