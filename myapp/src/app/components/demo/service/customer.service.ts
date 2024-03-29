import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../api/customer';
import { SpecimenReceipt } from '../api/SpecimenRecipt';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }

    // getCustomersSmall() {
    //     return this.http.get<any>('assets/demo/data/customers-small.json')
    //         .toPromise()
    //         .then(res => res.data as Customer[])
    //         .then(data => data);
    // }

    // getCustomersMedium() {
    //     return this.http.get<any>('assets/demo/data/customers-medium.json')
    //         .toPromise()
    //         .then(res => res.data as Customer[])
    //         .then(data => data);
    // }

    getCustomersLarge() {
        return this.http.get<any>('assets/demo/data/customers-large.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }
    getCustomersLarge2() {
        return this.http.get<any>('http://localhost:8080/api/student')
            .toPromise()
            .then(res => res as SpecimenReceipt[])
            .then(data => data);
    }
}
