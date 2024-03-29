import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
// import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableDemoModule } from '../uikit/table/tabledemo.module';
// import { TableDemoComponent } from '../uikit/table/tabledemo.component';
// import { AppFooterComponent } from '../../layout/app.footer.component';
// import { AppMenuComponent } from '../../layout/app.menu.component';
// import { AppMenuitemComponent } from '../../layout/app.menuitem.component';
// import { AppTopBarComponent } from '../../layout/app.topbar.component';
// import { AppLayoutModule } from '../../layout/app.layout.module'; 
// import { AppLayoutComponent } from '../../layout/app.layout.component';s

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        TableDemoModule,
        ButtonModule
        // AppLayoutModule // Import AppLayoutModule here
    ],
    declarations: [
        // TableDemoComponent
        // DashboardComponent,
        // AppMenuitemComponent,    
        // AppTopBarComponent,
        // AppFooterComponent,
        // AppMenuComponent
    ]
})
export class DashboardModule { }
