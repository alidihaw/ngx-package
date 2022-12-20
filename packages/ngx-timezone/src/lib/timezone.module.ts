import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TimezoneToCountryPipe } from './timezone.pipe';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [TimezoneToCountryPipe],
    exports: [TimezoneToCountryPipe,]
})
export class NgxTimezoneModule { }
