# @ngodings/ngx-interceptor

Angular HTTP Interceptor for Error Handling & Header Authorization

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-interceptor](https://npm.ngodings.com/packages/ngx-interceptor)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffee: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw) <br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-interceptor --save
```

Import the module

```ts
@NgModule({
    imports: [...],
    declarations: [...],
    providers: [
      ...
      { provide: HTTP_INTERCEPTORS, useClass: NgxHttpHeaderInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: NgxHttpErrorInterceptor, multi: true },
    ]
})
export class AppModule {}
```

Save token to local storage or session storage with key token

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
