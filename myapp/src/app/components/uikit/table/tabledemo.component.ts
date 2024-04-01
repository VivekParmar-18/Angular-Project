import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer, Representative } from '../../demo/api/customer';
import { CustomerService } from '../../demo/service/customer.service';
import { Product } from '../../demo/api/product';
import { ProductService } from '../../demo/service/product.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { SpecimenReceipt } from '../../demo/api/SpecimenRecipt';
import { DashboardLRFs } from '../../demo/api/DashboardLRFs';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    selector:'app-tabledemo',
    templateUrl: './tabledemo.component.html',
    providers: [MessageService, ConfirmationService]
})
export class TableDemoComponent implements OnInit {
    //SpecimenReceipt:[]=[];

    customers1: DashboardLRFs[] = [];

    dashboardData: DashboardLRFs[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;
    @ViewChild('filter1') filter1!: ElementRef;

    constructor(private customerService: CustomerService, private productService: ProductService,private http: HttpClient) { }

    ngOnInit() {
        this.customerService.getCustomersLarge2().then(customers => {
            this.customers1 = customers;
            this.loading = false;

            // @ts-ignore
            // this.customers1.forEach(customer => customer.date = new Date(customer.cdate));
            console.log(this.customers1);
        });
        // this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
        // this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'XuXue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];

        // this.loadData2(); 
        // this.loadData();// Load data when component initializes
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.customers3) {
            for (let i = 0; i < this.customers3.length; i++) {
                const rowData = this.customers3[i];
                const representativeName = rowData?.representative?.name || '';

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
                }
                else {
                    const previousRowData = this.customers3[i - 1];
                    const previousRowGroup = previousRowData?.representative?.name;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    }
                    else {
                        this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                    }
                }
            }
        }
    }
//     loadData2(): void {
//         // Make HTTP request to fetch data
//         this.http.get<DashboardLRFs[]>('http://localhost:8080/api/student').subscribe(data => {
//           // Assign received data to dashboardData property
//           this.dashboardData = data;
//         }, error => {
//           // Handle error
//           console.error('Error loading data2:', error);
//         });
//       }
//     loadData(): void {
//     // Make HTTP request here
//     this.http.get<any>('http://localhost:8080/api/student').subscribe(data => {
//       // Process the received data
//       this.SpecimenReceipt=data;
//       console.log(data);
//     }, error => {
//       // Handle error
//       console.error('Error loading data:', error);
//     });
//   }


    expandAll() {
        if (!this.isExpanded) {
            this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    async clear(table: Table) {
        this.filter.nativeElement.value = '';
        this.filter1.nativeElement.value = '';
        table.clear(); // Clear the selection
        table.reset(); // Reset the state
        table.sortOrder = 0; // Reset the sorting order
        table.sortField = null; // Reset the sorting field
        const customers = await this.customerService.getCustomersLarge2();
        table.value = customers;
    }
}