# @ngodings/ngx-scroll-to-top

Simple floating button for scroll to top in Angular

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-scroll-to-top](https://npm.ngodings.com/packages/ngx-scroll-to-top)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffee: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw) <br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-scroll-to-top --save
```

Import the module

```ts
import { NgxScrollToTopModule } from "@ngodings/ngx-scroll-to-top";

@NgModule({
    imports: [
        ...
        NgxScrollToTopModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Usage 

<p align="center">
  <img width="800" src="https://raw.githubusercontent.com/alidihaw/ngodings/master/packages/ngx-scroll-to-top/public/sample1.png">
</p>

Scroll to Top Floating

```html
<ngx-scroll-to-top [bottomPosition]="'100px'" [rightPosition]="'20px'"></ngx-scroll-to-top>
```

### Option (Input & Output)

| name | description | default value   |
| :---------- | :------------------------------------------------------------ | :-------------- |
| phoneNumber | Your scroll-to-top number | |
| message | Default message send text | |
| bottomPosition | Configuration Position Floating Button for Bottom | 100px |
| rightPosition | Configuration Position Floating Button for Right | 20px |

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
