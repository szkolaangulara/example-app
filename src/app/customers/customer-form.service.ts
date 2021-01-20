import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from './interfaces/customer.interface';

@Injectable()
export class CustomerFormService {
    private form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    public initForm(): FormGroup {

        this.form = this.formBuilder.group({
            ['name']: ['', Validators.required],
            ['lastName']: ['', Validators.required],
            ['jobTitle']: ['', Validators.required],
            ['description']: ['', Validators.required],
            ['photoSource']: ['', Validators.required],
        });
        return this.form;
    }

    public prepareCustomerFromForm(): Customer {
        if (!this.form) {
            return null;
        }

        return {
            name: this.form.controls.name.value,
            lastName: this.form.controls.lastName.value,
            jobTitle: this.form.controls.jobTitle.value,
            description: this.form.controls.description.value,
            photoSource: this.form.controls.photoSource.value,
        }

    }

    public clearForm(): void {
        this.form = null;
    }
}
