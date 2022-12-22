# @ngodings/ngx-whatsapp

Simple floating button to send whatsapp for your business/sales in Angular

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-whatsapp](https://npm.ngodings.com/packages/ngx-whatsapp)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw) <br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-whatsapp --save
```

Import the module

```ts
import { NgxWhatsappModule } from "@ngodings/ngx-whatsapp";

@NgModule({
    imports: [
        ...
        NgxWhatsappModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Usage 

<p align="center">
  <img width="800" src="https://raw.githubusercontent.com/alidihaw/ngodings/master/packages/ngx-whatsapp/public/sample1.png">
</p>

Whatsapp Floating Button

```html
<ngx-whatsapp [phoneNumber]="'+6285280871948'" [message]="'Hi, i need help about ... '" [bottomPosition]="'100px'" [rightPosition]="'20px'"></ngx-whatsapp>
```

### Option (Input & Output)

| name | description | default value   |
| :---------- | :------------------------------------------------------------ | :-------------- |
| phoneNumber | Your whatsapp number | |
| message | Default message send text | |
| bottomPosition | Configuration Position Floating Button for Bottom | 100px |
| rightPosition | Configuration Position Floating Button for Right | 20px |

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
