import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // ✅ Importation correcte
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { provideHttpClient } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
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
