# @ngodings/ngx-device

Angular mockup device for Iphone, Android, Ipad and Macbook with customize content

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-device](https://npm.ngodings.com/packages/ngx-device)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw) <br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-device --save
```

Import the module

```ts
import { NgxDeviceModule } from "@ngodings/ngx-device";

@NgModule({
    imports: [
        ...
        NgxDeviceModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Usage 

<p align="center">
  <img height="600" src="https://raw.githubusercontent.com/alidihaw/ngodings/master/packages/ngx-device/public/sample.png">
</p>

Iphone X

```html
<ngx-device [device]="'iphone-x'">Your Content</ngx-device>
```

Note 8

```html
<ngx-device [device]="'note8'">Your Content</ngx-device>
```

Iphone 8

```html
<ngx-device [device]="'iphone8'">Your Content</ngx-device>`
```

Iphone 8 Plus

```html
<ngx-device [device]="'iphone8plus'">Your Content</ngx-device>
```

Iphone 5s

```html
<ngx-device [device]="'iphone5s'">Your Content</ngx-device>
```

Ipad


```html
<ngx-device [device]="'ipad'">Your Content</ngx-device>
``

Nexus 5

```html
<ngx-device [device]="'nexus5'">Your Content</ngx-device>
```

Macbook

```html
<ngx-device [device]="'macbook'">Your Content</ngx-device>
```

### Option (Input & Output)

| name | description | default value   |
| :---------- | :------------------------------------------------------------ | :-------------- |
| device | Device Type | iphone-x |

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
