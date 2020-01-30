import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FilterPipe } from 'src/app/services/filter-pipe';
import { NgxImageCompressService } from 'ngx-image-compress';
import { TestComponent } from 'src/app/pages/test/test.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    // ClipboardModule,
    ChartsModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    TestComponent,
    FilterPipe
  ],
  providers: [NgxImageCompressService],
  exports: [FilterPipe]
})

export class AdminLayoutModule { }
