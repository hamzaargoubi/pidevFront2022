import { MemberComponent } from './Template/home/member/member.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Template/login/login.component';
import { HomeComponent } from './Template/home/home.component';
import { SlideComponent } from './Template/home/slide/slide.component';
import { AboutComponent } from './Template/home/about/about.component';
import { FooterComponent } from './Template/footer/footer.component';
import { MenuComponent } from './Template/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventComponent } from './Template/Events/event/event.component';
import { PublicationsComponent } from './Template/publications/publications.component';
import { RegisterComponent } from './Template/register/register.component';
import { NotfoundComponent } from './Template/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventDetailsComponent } from './Template/Events/event-details/event-details.component';
import { CommentComponent } from './Template/Events/comment/comment.component';
import { FormEventComponent } from './Template/Events/form-event/form-event.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';
import { AuthGuard } from './Services/auth.guard';
import { AuthenticationService } from './Services/authentication.service';
import { RandomGuard } from './Services/random.guard';
import { TokenInterceptor } from './Services/token.interceptor';
import { UpdateEventComponent } from './Template/Events/update-event/update-event.component';
import { DeleteEventComponent } from './Template/Events/delete-event/delete-event.component';


import {AssociationService} from './Services/association.service';
import { AssociationComponent } from './Template/association/association.component';
import {ToastrModule} from 'ngx-toastr';
import {ConfirmDeleteComponent} from './Template/confirm-delete/confirm-delete.component';
import {ShowAssociationComponent} from './Template/association/show-association/show-association.component';
import { ReclamationComponent } from './Template/reclamation/reclamation.component';
import { CalendarComponent } from './Template/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import {AddOrUpdateAssociationComponent} from './Template/association/add-or-update-association/add-or-update-association.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ContactComponent } from './Template/contact/contact.component';
import { UpdateUserComponent } from './Template/update-user/update-user.component';
import { SendVerificationCodeComponent } from './Template/send-verification-code/send-verification-code.component';
import { ChangePasswordComponent } from './Template/change-password/change-password.component';
import { BankComponent } from './Template/bank/bank.component';
import { BlogComponent } from './Template/blog/blog.component';
import { BlogElementComponent } from './Template/blog/blog-element/blog-element.component';
import { FormBlogComponent } from './Template/blog/form-blog/form-blog.component';
import { BlogDetailsComponent } from './Template/blog/blog-details/blog-details.component';
import { CommentElementComponent } from './Template/Comment/comment-element/comment-element.component';
import { TrascformComponent } from './Template/transaction/trascform/trascform.component';
import { TransactionComponent } from './Template/transaction/transaction.component';
import { ListtransactionComponent } from './Template/transaction/listtransaction/listtransaction.component';
import { ElementtransComponent } from './Template/transaction/elementtrans/elementtrans.component';
import { LoanComponent } from './Template/loan/loan.component';
import { LoanformComponent } from './Template/Loan/loanform/loanform.component';
import { LoandetailsComponent } from './Template/Loan/loandetails/loandetails.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SlideComponent,
    AboutComponent,
    MemberComponent,
    FooterComponent,
    MenuComponent,
    EventComponent,
    PublicationsComponent,
    RegisterComponent,
    NotfoundComponent,
    EventDetailsComponent,
    CommentComponent,
    FormEventComponent,
    CommentComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    AddOrUpdateAssociationComponent,
    ReclamationComponent,
    ShowAssociationComponent,
    ConfirmDeleteComponent,
    AssociationComponent,
    CalendarComponent,
    ContactComponent,
    UpdateUserComponent,
    SendVerificationCodeComponent,
    ChangePasswordComponent,
    BankComponent,
    BlogComponent,
    BlogElementComponent,
    FormBlogComponent,
    BlogDetailsComponent,
    FormBlogComponent,
    CommentElementComponent,
    TransactionComponent,
    TrascformComponent,
    ListtransactionComponent,
    ElementtransComponent,
    





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    FullCalendarModule,



  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    RandomGuard,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AssociationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
