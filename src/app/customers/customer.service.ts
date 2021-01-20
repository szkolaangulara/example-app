import {Injectable} from '@angular/core';
import {Customer} from './interfaces/customer.interface';

@Injectable()
export class CustomerService {

    public prepareCustomers(): Customer[] {
        return [
            {
                name: 'Adam',
                lastName: 'Szejba',
                jobTitle: 'Angular Developer',
                description: '6 lat doświadczenia, 3 lata z Angularem.',
                photoSource: 'https://www.szkolaangulara.pl/wp-content/uploads/2020/09/no-background.png'
            },
            {
                name: 'Tim',
                lastName: 'Grover',
                jobTitle: 'Trener koszykówki',
                description: 'Były trener Michaela Jordana oraz Kobe Bryanta.',
                photoSource: 'https://www.szkolaangulara.pl/wp-content/uploads/2020/09/TG-BW.png'
            },
            {
                name: 'Kobe',
                lastName: 'Bryant',
                jobTitle: 'Koszykarz NBA',
                description: '5-cio krotny mistrz NBA. Ponadprzeciętna etyka pracy.',
                photoSource: 'https://www.szkolaangulara.pl/wp-content/uploads/2020/09/output-onlinepngtools.png'
            }
        ]
    }
}
