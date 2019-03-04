import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EMP1_REFERRAL_DATA, EMP_REFERRAL_DATA } from '../shared/constants/constants';
import { CandidateDetails } from '../Models/CandidateDetails';

@Component({
  selector: 'refer-popup',
  templateUrl: './refer-popup.component.html',
})
export class ReferPopupComponent {

    referCandidateForm: FormGroup;
    jobOpenings = ['.net', 'python', 'xamarin', 'BI'];
    candidates = EMP1_REFERRAL_DATA;
    allCandidates = EMP_REFERRAL_DATA;

    @Output() dialogClose = new EventEmitter<any>();

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.createReferralForm();
    }

    createReferralForm() {
        this.referCandidateForm = this.fb.group({
            candidateName: ['', Validators.required],
            email: ['', Validators.required],
            company: [''],
            technology: [null, Validators.required],
            commments: ''
        });
    }

    addReferralCandidate() {
        if (this.referCandidateForm.valid) {
            const data = this.referCandidateForm.getRawValue();
            let detail = new CandidateDetails();
            detail.CandidateName = data.candidateName;
            detail.Status = 'Pending';
            detail.JobTitile = data.technology;
            detail.Actions = 'edit';
            this.candidates.push(detail);
            this.allCandidates.push(detail);
            this.referCandidateForm.reset();
            localStorage.setItem('allReferrals', JSON.stringify(this.allCandidates));
            this.dialogClose.emit();
        }
    }
}
