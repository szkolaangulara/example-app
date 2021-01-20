import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersDashboardRouting} from './customers-dashboard.routing';
import {CustomersDashboardComponent} from './customers-dashboard/customers-dashboard.component';
import {CardComponent} from './card/card.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CustomerDialogComponent} from './customer-dialog/customer-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CustomerFormService} from './customer-form.service';
import {CustomerService} from './customer.service';

@NgModule({
    imports: [CustomersDashboardRouting, CommonModule, MatDialogModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule],
    declarations: [
        CustomersDashboardComponent,
        CardComponent,
        CustomerDialogComponent
    ],
    entryComponents: [CustomerDialogComponent],
    providers: [CustomerFormService, CustomerService]
})
export class CustomersDashboardModule {
}
