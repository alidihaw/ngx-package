# @ngodings/ngx-ip

Simple get your ip in Angular

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-ip](https://npm.ngodings.com/packages/ngx-ip)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffee: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw)<br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-ip --save
```

Import the module

```ts
import { NgxIPModule, IPService } from 'packages/ngx-ip/src/public-api';

@NgModule({
    imports: [
        ...
        NgxIPModule
    ],
    declarations: [...],
    providers: [
        ...
        IPService
    ]
})
export class AppModule {}
```

### Usage 

Import the service

```ts
constructor(private ipService: IPService,) {}
```

## Get IP

```ts
this.ipService.getIP()
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid