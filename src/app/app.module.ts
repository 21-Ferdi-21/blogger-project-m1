import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // ✅ Importation correcte

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) // ✅ Nécessaire pour activer <router-outlet>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
