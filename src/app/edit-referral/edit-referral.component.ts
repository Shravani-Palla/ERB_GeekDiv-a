import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateDetails } from '../Models/CandidateDetails';

@Component({
    selector: 'edit-referral',
    templateUrl: './edit-referral.component.html',
})
export class EditReferralComponent {

    referCandidateForm: FormGroup;
    statuses = ['Pending', 'Interview Scheduled', 'Selected', 'On hold'];
    candidates: any[];
    referralDetail: CandidateDetails;

    @Output() dialogClose = new EventEmitter<any>();

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.referralDetail = new CandidateDetails();
        this.createReferralForm();
    }

    createReferralForm() {
        this.referCandidateForm = this.fb.group({
            candidateName: '',
            status: ['', Validators.required],
            commments: ''
        });
    }

    editCandidateStatus() {
        if (this.referCandidateForm.valid) {
            const data = this.referCandidateForm.getRawValue();
            this.candidates = JSON.parse(localStorage.getItem('allReferrals'));
            let candidate = this.candidates.find(x => x.CandidateName === this.referralDetail.CandidateName);
            candidate.Status = data.status;
            candidate.HRComments = data.commments;
            this.referCandidateForm.reset();
            this.dialogClose.emit(data);
        }
    }

    setReferralDetails(data) {
        this.referralDetail.CandidateName = data.CandidateName;
        this.referralDetail.JobTitile = data.JobTitile;
        this.referCandidateForm.get('status').setValue(data.Status);
        this.referCandidateForm.get('candidateName').setValue(data.CandidateName);
    }

}
