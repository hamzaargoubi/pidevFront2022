import { ContactComponent } from './Template/contact/contact.component';
import { ShowAssociationComponent } from './Template/association/show-association/show-association.component';
import { CalendarComponent } from './Template/calendar/calendar.component';
import { UpdateEventComponent } from './Template/Events/update-event/update-event.component';
import { FormEventComponent } from './Template/Events/form-event/form-event.component';

import { NotfoundComponent } from './Template/notfound/notfound.component';
import { RegisterComponent } from './Template/register/register.component';
import { LoginComponent } from './Template/login/login.component';
import { PublicationsComponent } from './Template/publications/publications.component';
import { EventComponent } from './Template/Events/event/event.component';
import { AboutComponent } from './Template/home/about/about.component';
import { HomeComponent } from './Template/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './Template/Events/event-details/event-details.component';
import { RandomGuard } from './Services/random.guard';
import { AuthGuard } from './Services/auth.guard';



import {AssociationComponent} from './Template/association/association.component';
import { ReclamationComponent } from './Template/reclamation/reclamation.component';
import {AddOrUpdateAssociationComponent} from './Template/association/add-or-update-association/add-or-update-association.component';
import { SendVerificationCodeComponent } from './Template/send-verification-code/send-verification-code.component';
import { BankComponent } from './Template/bank/bank.component';
import { BlogComponent } from './Template/blog/blog.component';
import { BlogDetailsComponent } from './Template/blog/blog-details/blog-details.component';
import { TrascformComponent } from './Template/transaction/trascform/trascform.component';
import { TransactionComponent } from './Template/transaction/transaction.component';
import { ListtransactionComponent } from './Template/transaction/listtransaction/listtransaction.component';
import { LoanformComponent } from './Template/Loan/loanform/loanform.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "bank", component: BankComponent},
  {path: "blog", component: BlogComponent},
  {path: "blog/blog-details", component: BlogDetailsComponent},
  {path: "transaction", component: TransactionComponent},
  {path: "transactionform", component: TrascformComponent},
  {path: "liste", component: ListtransactionComponent},


  {path: "feedback", component: ReclamationComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "calendar", component: CalendarComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "event_details/:id", component: EventDetailsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "form-event", component: FormEventComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "update-event/:id", component: UpdateEventComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: "home", component: HomeComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "about", component: AboutComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "events", component: EventComponent},
  {path: "publications", component: PublicationsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "login", component: LoginComponent,canActivate: [AuthGuard]},
  {path: "forgotPassword", component: SendVerificationCodeComponent,canActivate: [AuthGuard]},
  {path: "register", component: RegisterComponent, canActivate: [AuthGuard]},
  {path: "event_details", component: EventDetailsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "contact", component: ContactComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},

  // Associations
  {path: "associations", component: AssociationComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "associations/show/:id", component: ShowAssociationComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "associations/add-or-update", component: AddOrUpdateAssociationComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},




  {path: "**", component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
