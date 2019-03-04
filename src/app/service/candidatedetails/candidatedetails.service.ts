

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Headers } from '@angular/http';


@Injectable()
export class CandidateDetailsService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private SERVER_URL = 'http://localhost:1234/api/' //url to web api
    //private webApiUrl = ;

    constructor(private httpClient: HttpClient){ }

    public getAllCandidates(){ 
        return this.httpClient.get(this.SERVER_URL + 'candidateDetailsData');
    }

    public getRerralData() {
        return this.httpClient.get(this.SERVER_URL + 'referralData');
    }
  
}