import { InMemoryDbService } from 'angular-in-memory-web-api';

import {CandidateDetails} from '../Models/CandidateDetails';
import { Department } from '../models/department.model';
import { Skill } from '../models/skill.model';
import { Referral } from '../models/referral.model';
import { Employee } from '../models/employee.model';

export class InMemoryCandidatesDataService implements InMemoryDbService {
  createDb() {

const candidateDetailsData: CandidateDetails[] = [  
  {id:1, CandidateName:"Ramya", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"4",  Status:"Reviewed",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:2, CandidateName:"Madhurya", RefferedEmpName:"sravani", JobTitile:"python", Resume:"path",  Rating:"3",  Status:"Pending",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:3, CandidateName:"Prachi", RefferedEmpName:"sravani", JobTitile:"Python", Resume:"path",  Rating:"2",  Status:"On hold",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:4, CandidateName:"Sowmya", RefferedEmpName:"sravani", JobTitile:"BI", Resume:"path",  Rating:"4",  Status:"Scheduled interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:5, CandidateName:"Preethi", RefferedEmpName:"sravani", JobTitile:"BI", Resume:"path",  Rating:"3",  Status:"On hold",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:6, CandidateName:"Geetha", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"1",  Status:"Rejected",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" },
  {id:7, CandidateName:"Sitha", RefferedEmpName:"sravani", JobTitile:".net", Resume:"path",  Rating:"4",  Status:"Scheduled Interview",  AppliedDate:"3/1/2019",    Actions:"edit",HRComments:"Profile matches with requirement" }

 ];
    return {candidateDetailsData};
  }
}

export class InMemoryDepartmentDataService implements InMemoryDbService {
    createDb() {
        const departmentData: Department[] = [
            { departmentID: 1, departmentName: 'UX' },
            { departmentID: 2, departmentName: 'UI' },
            { departmentID: 3, departmentName: 'Technology' },
            { departmentID: 4, departmentName: 'Mobile' },
            { departmentID: 5, departmentName: 'BI' },
            { departmentID: 6, departmentName: 'BD' }
        ]
        return { departmentData };
    }
}

export class InMemorySkillDataService implements InMemoryDbService {
    createDb() {
        const skillData: Skill[] = [
            { skillID: 1, skillName: '.Net' },
            { skillID: 2, skillName: 'UX' },
            { skillID: 3, skillName: 'IOS' },
            { skillID: 4, skillName: 'Java' },
            { skillID: 5, skillName: 'QA-Manual' },
            { skillID: 6, skillName: 'MS SQL Server' }
        ]
        return { skillData };
    }
}

export class InMemoryReferralDataService implements InMemoryDbService {
    createDb() {

        const referralData: Referral[] = [
            { firstName: 'Ramya', lastName: 'Shetty', referredBy: 'Shravani Palla', referredByID: 1, appliedDate: '01/01/2018', companyName: 'TCS', departmentID: 1, technologyID: 2, status: 'Active' },
            { firstName: 'Hari', lastName: 'Shetty', referredBy: 'Shravani Palla', referredByID: 1, appliedDate: '01/01/2018', companyName: 'TCS', departmentID: 3, technologyID: 1, status: 'Active' },
            { firstName: 'Sita', lastName: 'Devi', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'Infosys', departmentID: 3, technologyID: 1, status: 'Active' },
            { firstName: 'Ram', lastName: 'Reddy', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'IBM', departmentID: 6, technologyID: 6, status: 'Active' },
            { firstName: 'Laxman', lastName: 'Rao', referredBy: 'Haritha Reddy', referredByID: 3, appliedDate: '03/03/2018', companyName: 'Infosys', departmentID: 6, technologyID: 6, status: 'Active' },
             { firstName: 'Leela', lastName: 'Reddy', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'IBM', departmentID: 6, technologyID: 6, status: 'Active' },
            { firstName: 'Krishna', lastName: 'Rao', referredBy: 'Haritha Reddy', referredByID: 3, appliedDate: '03/03/2018', companyName: 'Infosys', departmentID: 6, technologyID: 6, status: 'Active' },
             { firstName: 'Arjun', lastName: 'Reddy', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'IBM', departmentID: 6, technologyID: 6, status: 'Rejected' },
            { firstName: 'Sankalp', lastName: 'Rao', referredBy: 'Haritha Reddy', referredByID: 3, appliedDate: '03/03/2018', companyName: 'Infosys', departmentID: 6, technologyID: 6, status: 'Active' },
             { firstName: 'Ajay', lastName: 'Reddy', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'IBM', departmentID: 6, technologyID: 6, status: 'Rejected' },
            { firstName: 'Sirisha', lastName: 'Rao', referredBy: 'Haritha Reddy', referredByID: 3, appliedDate: '03/03/2018', companyName: 'Infosys', departmentID: 6, technologyID: 6, status: 'Rejected' },

            { firstName: 'Raja', lastName: 'Shetty', referredBy: 'Shravani Palla', referredByID: 1, appliedDate: '01/01/2018', companyName: 'TCS', departmentID: 2, technologyID: 2, status: 'Active' },
            { firstName: 'Shekar', lastName: 'Shetty', referredBy: 'Shravani Palla', referredByID: 1, appliedDate: '01/01/2018', companyName: 'TCS', departmentID: 2, technologyID: 3, status: 'Active' },
            { firstName: 'Amrit', lastName: 'Devi', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'Infosys', departmentID: 3, technologyID: 3, status: 'Rejected' },
            { firstName: 'Kalpa', lastName: 'Reddy', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'IBM', departmentID: 5, technologyID: 6, status: 'Active' },
            { firstName: 'HARIHARI', lastName: 'Rao', referredBy: 'Haritha Reddy', referredByID: 3, appliedDate: '03/03/2018', companyName: 'Infosys', departmentID: 4, technologyID: 4, status: 'Rejected' },
            { firstName: 'Shekar', lastName: 'Reddy', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'IBM', departmentID: 4, technologyID: 6, status: 'Active' },
            { firstName: 'Snajna', lastName: 'Rao', referredBy: 'Haritha Reddy', referredByID: 3, appliedDate: '03/03/2018', companyName: 'Infosys', departmentID: 5, technologyID: 4, status: 'Active' },
            { firstName: 'Spandana', lastName: 'Reddy', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'IBM', departmentID: 4, technologyID: 5, status: 'Rejected' },
            { firstName: 'Sankalp', lastName: 'Rao', referredBy: 'Haritha Reddy', referredByID: 3, appliedDate: '03/03/2018', companyName: 'Infosys', departmentID: 2, technologyID: 5, status: 'Active' },
            { firstName: 'REDDY', lastName: 'Reddy', referredBy: 'Ramya Konkala', referredByID: 2, appliedDate: '02/02/2018', companyName: 'IBM', departmentID: 2, technologyID: 6, status: 'Rejected' },
            { firstName: 'Sirisha', lastName: 'Rao', referredBy: 'Haritha Reddy', referredByID: 3, appliedDate: '03/03/2018', companyName: 'Infosys', departmentID: 2, technologyID: 6, status: 'Rejected' }
        ];
        return { referralData };
    }
}

export class InMemoryEmployeeDataService implements InMemoryDbService {
    createDb() {
        const employeeData: Employee[] = [
            { employeeID: 1, employeeName: "Shravani Palla" },
            { employeeID: 2, employeeName: "Ramya Konkala" },
            { employeeID: 3, employeeName: "Haritha Reddy" }
        ];
        return { employeeData };
    }
}