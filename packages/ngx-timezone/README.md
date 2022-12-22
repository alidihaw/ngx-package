# @ngodings/ngx-timezone

Easy for get All Timezone, detect your timezone, convert timezone to country & get all timezone by country in Angular

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-timezone](https://npm.ngodings.com/packages/ngx-timezone)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw)<br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-timezone --save
```

Import the module

```ts
import { NgxTimezoneModule, TimezoneService } from "@ngodings/ngx-timezone";

@NgModule({
    imports: [
        ...
        NgxTimezoneModule
    ],
    declarations: [...],
    providers: [
        ...
        TimezoneService
    ]
})
export class AppModule {}
```

### Usage 

Import the service

```ts
constructor(private timezoneService: TimezoneService,) {}
```

## Your timezone

```ts
this.timezoneService.timezone;
```

## Convert Timezone to Country

```ts
await this.timezoneService.convertTimezoneToCountry('Asia/Jakarta');
```

## Convert Timezone to Country - Pipe

```html
{{ 'Asia/Jakarta'| timezoneToCountryPipe | async }};
```

## List Timezones from Country

```ts
await this.timezoneService.getListTimezoneFromCountry('Indonesia')
```

## List Timezones

```ts
await this.timezoneService.getListTimezones()
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid