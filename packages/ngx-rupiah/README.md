# @ngodings/ngx-rupiah

Angular directive mask for currency Rupiah/IDR support for NgModule or Reactive forms, pipe for currency Rupiah/IDR & pipe for terbilang in Rupiah/IDR

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-rupiah](https://npm.ngodings.com/packages/ngx-rupiah)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw)<br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-rupiah --save
```

Import the module

```ts
import { NgxRupiahModule } from "@ngodings/ngx-rupiah";

@NgModule({
    imports: [
        ...
        NgxRupiahModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Usage 

```html
<input rupiahMask formControlName="value" />
```

 * `ngModel` An attribute of type number. If is displayed `'Rp 5000'`, the attribute will be `'5000'`.

## Terbilang Function
- 1250000 = Satu Juta Dua Ratus Lima Puluh Ribu Rupiah
- 25000000 = Dua Puluh Lima Juta Rupiah
- 5000 = Lima Ribu Rupiah

```ts
this.rupiahService.getTerbilang(1250000);
this.rupiahService.getTerbilang(25000000);
this.rupiahService.getTerbilang(5000);
```

Import the service

```ts
constructor(private rupiahService: RupiahService,) {}
```


## Terbilang Pipe
- 1250000 = Satu Juta Dua Ratus Lima Puluh Ribu Rupiah
- 25000000 = Dua Puluh Lima Juta Rupiah
- 5000 = Lima Ribu Rupiah

```html
{{ 1250000 | terbilangPipe }}
{{ 25000000 | terbilangPipe }}
{{ 5000 | terbilangPipe }}
```

## Rupiah Pipe
- 1250000 = Rp1.250.000,00
- 25000000 = Rp25.000.000,00
- 5000 = Rp5.000,00

```html
{{ 1250000 | rupiahPipe }}
{{ 25000000 | rupiahPipe }}
{{ 5000 | rupiahPipe }}
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
