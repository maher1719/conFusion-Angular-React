import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuComponent} from './menu/menu.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {DishdetailComponent} from './dishdetail/dishdetail.component';
import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LeaderService} from "./services/leader.service";
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [DishService, PromotionService, LeaderService],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ],
})
export class AppModule {
}
