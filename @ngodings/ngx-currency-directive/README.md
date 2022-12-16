# @ngodings/ngx-currency-directive

## Demo - Angular v15

https://nbfontana.github.io/ngx-currency/

## Support Me

If you like this package I will be happy that you support buying coffee for me :)

Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw)

[![buycoffe]https://raw.githubusercontent.com/alidihaw/ngodings/master/%40ngodings/ngx-currency-directive/public/coffee.png](https://www.buymeacoffee.com/alidihaw)


## About

## Getting Started

### Installing and Importing

Install the package by command:

```sh
    npm install ngx-currency --save
```

Import the module

```ts
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
    imports: [
        ...
        NgxCurrencyModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Using 

```html
<input currencyMask formControlName="value" />
```

 * `ngModel` An attribute of type number. If is displayed `'$ 25.63'`, the attribute will be `'25.63'`.

### Options 

You can set options...

```html
<!-- example for pt-BR money -->
<input currencyMask formControlName="value" [options]="{ prefix: 'R$ ', thousands: '.', decimal: ',' }"/>
```  

Available options: 

 * `align` - Text alignment in input. (default: `right`)
 * `allowNegative` - If `true` can input negative values.  (default: `true`)
 * `decimal` -  Separator of decimals (default: `'.'`)
 * `precision` - Number of decimal places (default: `2`)
 * `prefix` - Money prefix (default: `'$ '`)
 * `suffix` - Money suffix (default: `''`)
 * `thousands` - Separator of thousands (default: `','`)
 * `nullable` - when true, the value of the clean field will be `null`, when false the value will be `0`
 * `min` - The minimum value (default: `undefined`)
 * `max` - The maximum value (default: `undefined`)
 * `inputMode` - Determines how to handle numbers as the user types them (default: `FINANCIAL`)

Input Modes:

 * `FINANCIAL` - Numbers start at the highest precision decimal. Typing a number shifts numbers left.
                 The decimal character is ignored. Most cash registers work this way. For example:
   * Typing `'12'` results in `'0.12'`
   * Typing `'1234'` results in `'12.34'`
   * Typing `'1.234'` results in `'12.34'`
 * `NATURAL` - Numbers start to the left of the decimal. Typing a number to the left of the decimal shifts
               numbers left; typing to the right of the decimal replaces the next number. Most text inputs
               and spreadsheets work this way. For example:
   * Typing `'1234'` results in `'1234'`
   * Typing `'1.234'` results in `'1.23'`
   * Typing `'12.34'` results in `'12.34'`
   * Typing `'123.4'` results in `'123.40'`

You can also set options globally...

```ts
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";

export const customCurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: ".",
    nullable: true,
    min: null,
    max: null,
    inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
    imports: [
        ...
        NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
    ],
    declarations: [...],
    providers: [...],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` or `npm run demo` to start a development server on port 8000 with auto reload + tests.


## License

MIT @ Ali Abdul Wahid
