# @ngodings/ngx-country

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-country](https://npm.ngodings.com/packages/ngx-country)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw)<br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-country --save
```

Import the module

```ts
import { NgxCountryModule, CountryService } from "@ngodings/ngx-country";

@NgModule({
    imports: [
        ...
        NgxCountryModule
    ],
    declarations: [...],
    providers: [
        ...
        CountryService
    ]
})
export class AppModule {}
```

### Usage 

Import the service

```ts
constructor(private countryService: CountryService,) {}
```

## Get All Countries

```ts
await this.countryService.getCountries();
```

## Get All Country Codes

```ts
await this.countryService.getCountryCodes();
```

## Get Abbreviation By Country

```ts
await this.countryService.getAbbreviationByCountry('Singapore');
```

## Get Code By Country

```ts
await this.countryService.getCodeByCountry('Singapore');
```

## Get Country By Code

```ts
await this.countryService.getCountryByCode('+65');
```

## Get Country By Abbreviation

```ts
await this.countryService.getCountryByAbbreviation('SG');
```

## Get Country By Abbreviation - Pipe

```html
{{ 'SG'| countryByAbbreviationPipe | async }}
```

## Get Abbreviation By Country - Pipe

```html
{{ 'Singapore'| abbreviationByCountryPipe | async }}
```

## Get Country By Code - Pipe

```html
{{ '+65'| countryByCodePipe | async }}
```

## Get Code By Country - Pipe

```html
{{ 'Singapore'| codeByCountryPipe | async }}
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid