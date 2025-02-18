import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // ✅ Importation correcte
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { provideHttpClient } from '@angular/common/http';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) // ✅ Nécessaire pour activer <router-outlet>
  ],
  providers: [
    provideHttpClient(),
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
