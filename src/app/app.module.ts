import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryCandidatesDataService, InMemoryDepartmentDataService, InMemorySkillDataService, InMemoryReferralDataService } from './service/in-memory-data.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { GridComponent } from './grid/grid.component';
import { CandidateDetailsService } from './service/candidatedetails/candidatedetails.service';
import { EmployeeComponent } from './employee/employee.component';
import { ReferPopupComponent } from './refer-popup/refer-popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrGridComponent } from './hr-grid/hr-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './primeng/primeng.module';
import { EditReferralComponent } from './edit-referral/edit-referral.component';
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'grid', component: GridComponent },
    { path: 'login', component: LoginComponent },
    { path: 'my-referrals', component: EmployeeComponent },
    { path: 'admin/dashboard', component: DashboardComponent },
    { path: 'referrals', component: HrGridComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        GridComponent,
        EmployeeComponent,
        ReferPopupComponent,
        DashboardComponent,
        HrGridComponent,
        EditReferralComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryCandidatesDataService),
        HttpClientInMemoryWebApiModule.forRoot(InMemoryReferralDataService),
        RouterModule.forRoot(routes),
        PrimeNgModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [CandidateDetailsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
