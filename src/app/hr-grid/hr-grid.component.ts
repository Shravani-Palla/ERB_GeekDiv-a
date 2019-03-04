import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidateDetails } from '../Models/CandidateDetails';
import { CandidateDetailsService } from '../service/candidatedetails/candidatedetails.service';
import { EditReferralComponent } from '../edit-referral/edit-referral.component';
import { EMP_REFERRAL_DATA } from '../shared/constants/constants';

@Component({
  selector: 'app-hr-grid',
  templateUrl: './hr-grid.component.html'
})
export class HrGridComponent implements OnInit {

    candidateDetails: CandidateDetails[];
    candidateDetail: CandidateDetails;
    cols: any[];
    display: boolean = false;
    @ViewChild('editRef') editReferral: EditReferralComponent;

    constructor(private candidateDetailsService: CandidateDetailsService) { }

    ngOnInit() {
        this.candidateDetails = JSON.parse(localStorage.getItem('allReferrals'));
        if (!this.candidateDetails) {
            this.candidateDetails = EMP_REFERRAL_DATA;
        }

        //this.candidateDetailsService.getAllCandidates().subscribe((data : any[])=>{
        //  console.log(data);
        //  this.candidateDetails = data;
        //})  

        this.cols = [
            { field: 'CandidateName', header: 'Candidate Name' },
            { field: 'JobTitile', header: 'Skill' },
            { field: 'Rating', header: 'Rating' },
            { field: 'Status', header: 'Status' },
            { field: 'Actions', header: 'Actions' }
        ];  
    }

    showDialog(data) {
        this.editReferral.setReferralDetails(data);
        this.display = true;

    }

    closeDialog($event) {
        this.display = false;
        let candidate = this.candidateDetails.find(x => x.CandidateName === $event.candidateName);
        candidate.Status = $event.status;
        candidate.HRComments = $event.commments;
    }
}
