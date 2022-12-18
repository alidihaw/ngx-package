# @ngodings/ngx-copy

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-copy](https://npm.ngodings.com/packages/ngx-copy)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw)

## About

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-copy --save
```

Import the module

```ts
import { NgxCopyDirective } from "@ngodings/ngx-copy";

@NgModule({
    imports: [
        ...
        NgxCopyDirective
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Using 

From input

```html
<input type='text' ngxCopy #cp="copy"/>

<button (click)="cp.copy()">Copy</button>
```

From any HTML tag

```html
<p ngxCopy #cp="copy">Lorem ipsum</p>

<button (click)="cp.copy()">Copy</button>
```

From complex div

```html
<div ngxCopy #cp="copy">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit.
 Nullam rutrum augue at ante sollicitudin posuere.
 Pellentesque congue consequat enim quis luctus.</p>
  <div>
    <h2>Lorem ipsum</h2>
  </div>
</div>

<button (click)="cp.copy()">Copy</button>
```
Also you can bind it to any tag

```html
<p ngxCopy #cp="copy">Lorem ipsum</p>

<p (click)="cp.copy()">Copy</p>
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
