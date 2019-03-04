import { CandidateDetails } from 'src/app/Models/CandidateDetails';
import { Department } from 'src/app/models/department.model';

export const EMP1_REFERRAL_DATA: CandidateDetails[] = [
    { id: 1, CandidateName: "Ramya", RefferedEmpName: "shravani", JobTitile: ".net", Resume: "path", Rating: "4", Status: "Reviewed", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 1 },
    { id: 2, CandidateName: "Madhurya", RefferedEmpName: "shravani", JobTitile: "python", Resume: "path", Rating: "3", Status: "Pending", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 1 },
    { id: 3, CandidateName: "Prachi", RefferedEmpName: "shravani", JobTitile: "python", Resume: "path", Rating: "2", Status: "On hold", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 1 }
];

export const EMP_REFERRAL_DATA: CandidateDetails[] = [
    { id: 1, CandidateName: "Ramya", RefferedEmpName: "shravani", JobTitile: ".net", Resume: "path", Rating: "4", Status: "Reviewed", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 1 },
    { id: 2, CandidateName: "Madhurya", RefferedEmpName: "shravani", JobTitile: "python", Resume: "path", Rating: "3", Status: "Pending", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 1 },
    { id: 3, CandidateName: "Prachi", RefferedEmpName: "shravani", JobTitile: "python", Resume: "path", Rating: "2", Status: "On hold", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 1 },
    { id: 4, CandidateName: "Sowmya", RefferedEmpName: "shravani", JobTitile: "BI", Resume: "path", Rating: "4", Status: "Scheduled interview", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 2 },
    { id: 5, CandidateName: "Preethi", RefferedEmpName: "ramya", JobTitile: "BI", Resume: "path", Rating: "3", Status: "On hold", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 2 },
    { id: 6, CandidateName: "Geetha", RefferedEmpName: "ramya", JobTitile: ".net", Resume: "path", Rating: "1", Status: "Rejected", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 2 },
    { id: 7, CandidateName: "Sitha", RefferedEmpName: "ramya", JobTitile: ".net", Resume: "path", Rating: "4", Status: "Scheduled Interview", AppliedDate: "3/1/2019", Actions: "edit", HRComments: "Profile matches with requirement", RefferedEmpID: 2 }
];

export const DEPARTMENTS: Department[] = [
    { departmentID: 1, departmentName: 'UX' },
    { departmentID: 2, departmentName: 'UI' },
    { departmentID: 3, departmentName: 'Technology' },
    { departmentID: 4, departmentName: 'Mobile' },
    { departmentID: 5, departmentName: 'BI' },
    { departmentID: 6, departmentName: 'BD' }
];

