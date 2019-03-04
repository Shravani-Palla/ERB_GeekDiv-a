
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { CandidateDetails } from '../models/CandidateDetails';
import { EMP1_REFERRAL_DATA } from '../shared/constants/constants';

@Component({
    selector: 'grid',
    templateUrl: './grid.component.html',
    animations: [
        trigger('rowExpansionTrigger', [
            state('void', style({
                transform: 'translateX(-10%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class GridComponent implements OnInit {

    candidateDetails: CandidateDetails[] = EMP1_REFERRAL_DATA;
    cols: any[];
    display: boolean = false;

    constructor() { }

    ngOnInit() {
        this.cols = [
            { field: 'CandidateName', header: 'Candidate Name' },
            { field: 'JobTitile', header: 'Skill' },
            { field: 'Status', header: 'Status' }
        ];
    }

    showDialog() {
        this.display = true;
    }

}
