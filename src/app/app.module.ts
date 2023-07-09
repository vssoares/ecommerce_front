import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

// material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoaderModule } from './shared/components/loader/loader.module';
import { LazyImgDirective } from './shared/directives/lazyImg.directive';
@NgModule({
  declarations: [AppComponent, AdminComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,

    // material
    MatSlideToggleModule,
  ],
  providers: [LazyImgDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
