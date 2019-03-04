import { Component, OnInit } from '@angular/core';
import { CandidateDetailsService } from '../service/candidatedetails/candidatedetails.service';
import { Department } from '../models/department.model';
import { Router } from '@angular/router';
import { DEPARTMENTS } from '../shared/constants/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    departmentData: Department[] = DEPARTMENTS;
    departmentWiseSubmittedCount = [];
    departmentWiseActiveCount = [];
    highCompanies: any;
    highReferralsByEmployee: any;
    referralData: any;
    practiseData: any;
    data: any;

    constructor(private candidateDetailsService: CandidateDetailsService, private router: Router) { }

    ngOnInit() {
        this.getHighReferralsData();
        this.getHighCompanies();
        this.candidateDetailsService.getRerralData().subscribe((data: any[]) => {
            console.log(data);
            this.referralData = data;
            if (this.referralData) {
                let dataCopyForPractise = [...data];
                this.departmentData.forEach((element) => {
                    let data = dataCopyForPractise.filter(x => x.departmentID === element.departmentID);
                    let submittedCount = data ? data.length : 0;
                    this.departmentWiseSubmittedCount.push(submittedCount);

                    let activeData = dataCopyForPractise.filter(x => x.departmentID === element.departmentID && x.status === 'Active');
                    let activeCount = activeData ? activeData.length : 0;
                    this.departmentWiseActiveCount.push(activeCount);
                })
                this.getPractiseData();
            }
        });
        this.getCandidateStatusData();
    }

    getHighReferralsData() {
        this.highReferralsByEmployee = {
            labels: ['Bharath', 'Krishna', 'Radha', 'Rama', 'Sita' ],
            datasets: [
                {
                    label: '',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [15,3,5,9,8]
                }
            ]
        }
    }

    getHighCompanies() {
        this.highCompanies = {
            labels: ['Company-1', 'Company-2', 'Company-3', 'Company-4', 'Company-5'],
            datasets: [
                {
                    label: '',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [30, 45, 32, 88, 44]
                }
            ]
        }
    }

    getPractiseData() {
        this.practiseData = {
            labels: ['UX', 'UI', 'Technology', 'Mobile', 'BI', 'BD'],
            datasets: [
                {
                    label: 'Submitted',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: this.departmentWiseSubmittedCount
                },
                {
                    label: 'Selected',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: this.departmentWiseActiveCount
                }
            ]
        }
    }

    getCandidateStatusData() {
        this.data = {
            labels: ['Active', 'Rejected', 'Pending', 'Interview Scheduled'],
            datasets: [
                {
                    data: [77, 33, 55, 44],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
    }

    goToGridPage() {
        this.router.navigate(['/referrals']);
    }

}
