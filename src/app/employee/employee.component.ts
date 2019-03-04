import { Component } from '@angular/core';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
})
export class EmployeeComponent {

    jobOpenings = ['.net', 'python', 'xamarin', 'BI'];
    jobDescription = ["Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.",
        "Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.",
        "Prepares and installs solutions by determining and designing system specifications, standards, and programming."
    ];
    display: boolean = false;

    showDialog() {
        this.display = true;
    }

    closeDialog() {
        this.display = false;
    }
}