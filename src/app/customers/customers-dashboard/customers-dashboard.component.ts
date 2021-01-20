import {Component, OnInit} from '@angular/core';
import {Customer} from '../interfaces/customer.interface';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDialogComponent} from '../customer-dialog/customer-dialog.component';
import {CustomerFormService} from '../customer-form.service';
import {CustomerService} from '../customer.service';

@Component({
    selector: 'app-customers-dashboard',
    templateUrl: './customers-dashboard.component.html',
    styleUrls: ['./customers-dashboard.component.css']
})
export class CustomersDashboardComponent implements OnInit {
    public customers: Customer[] = [];

    constructor(public dialog: MatDialog, private customerFormService: CustomerFormService, private customerService: CustomerService) {
    }

    public ngOnInit(): void {
        this.customers = this.customerService.prepareCustomers();
    }

    public addCustomer(): void {
        const dialogRef = this.dialog.open(CustomerDialogComponent, {
            width: '450px',
            disableClose: true,
        });

        dialogRef.afterClosed().subscribe(result => {
            const customer = this.customerFormService.prepareCustomerFromForm();
            console.log('The dialog was closed', customer);

            if (customer) {
                this.customers = [...this.customers, customer];
            }
        });
    }
}
