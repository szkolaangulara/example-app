import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {CustomerFormService} from '../customer-form.service';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.css']
})
export class CustomerDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(private customerFormService: CustomerFormService,
              public dialogRef: MatDialogRef<CustomerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public formGroup: FormGroup) { }

  public ngOnInit(): void {
    this.form = this.customerFormService.initForm();
  }

  public submitForm(): void {
    if (this.form.valid) {
      this.dialogRef.close()
    }
  }

  public closeDialog(): void {
    this.customerFormService.clearForm();
    this.dialogRef.close();
  }
}
