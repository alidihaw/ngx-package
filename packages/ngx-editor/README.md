# @ngodings/ngx-editor

Angular package for Editor, easy to use (Support Mention & Tagging)

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-editor](https://npm.ngodings.com/packages/ngx-editor)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw) <br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-editor --save
```

Import the module

```ts
import { NgxEditorModule } from "@ngodings/ngx-editor";

@NgModule({
    imports: [
        ...
        NgxEditorModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

Set types editor - inside src folder - create file types.d.ts
```ts
declare module '@ngodings/ckeditor5' {
    const ClassicEditorBuild: any;

    export default ClassicEditorBuild;
}

```

### Usage 

<p align="center">
  <img width="800" src="https://raw.githubusercontent.com/alidihaw/ngodings/master/packages/ngx-editor/public/sample1.png">
</p>

Editor (Support Tagging # & Mention @)

```html
<ngx-editor [(data)]="text" [tags]="tags" [mentions]="mentions"></ngx-editor>
```

Editor Simple

```html
<ngx-editor [(data)]="text" [tags]="tags" [mentions]="mentions" [isSimple]="true"></ngx-editor>
```

### Option (Input & Output)

| name | description | default value   |
| :---------- | :------------------------------------------------------------ | :-------------- |
| data | text data | |
| tags | Data tags trigger by @ | [] |
| mentions | Data mentions trigger by @ | []  |
| isSimple | Simple Toolbar | false |
| dataChange | Callback text data |  |

Editor View Result

```html
<ngx-view-editor [data]="text"></ngx-view-editor>
```

### Option (Input & Output)

| name | description | default value   |
| :---------- | :------------------------------------------------------------ | :-------------- |
| data | text data | |
| customClass | Custom view inner html | |

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
