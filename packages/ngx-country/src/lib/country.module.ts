import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CodeByCountryPipe, CountryByAbbreviationPipe, CountryByCodePipe, AbbreviationByCountryPipe } from './country.pipe';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [CodeByCountryPipe, CountryByAbbreviationPipe, CountryByCodePipe, AbbreviationByCountryPipe],
    exports: [CodeByCountryPipe, CountryByAbbreviationPipe, CountryByCodePipe, AbbreviationByCountryPipe]
})
export class NgxCountryModule { }
