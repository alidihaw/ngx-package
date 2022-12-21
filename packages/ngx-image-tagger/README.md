# @ngodings/ngx-image-tagger

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-image-tagger](https://npm.ngodings.com/packages/ngx-image-tagger)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffe: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw) <br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-image-tagger --save
```

Import the module

```ts
import { NgxImageTaggerModule } from "@ngodings/ngx-image-tagger";

@NgModule({
    imports: [
        ...
        NgxImageTaggerModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Usage 

<p align="center">
  <img width="800" src="https://raw.githubusercontent.com/alidihaw/ngodings/master/packages/ngx-image-tagger/public/sample-image-tagger.png">
</p>

Image Tag - Like Instagram - On Hover

```html
<ngx-image-tagger 
    [tagger]="data.taggerHover" 
    [isShowShop]="true" 
    [isShowPrice]="true" 
    [isShowLink]="true" 
    [isShowThumbnail]="true" 
    [isAllowCreate]="false" 
    [placeholderCreateTitle]="'Tag your product!'"
    [placeholderLink]="'Link'"
    [placeholderPrice]="'Price'"
    [onShowTagMode]="'Hover'"
    [imageClassList]="''"
    [inputClassList]="''"
    [backgroundColor]="'#03a9f4'"
    [borderColor]="'#007ac1'"
    [textColor]="'#ffffff'"
    (taggerChange)="data.taggerHover = $event">
</ngx-image-tagger>
```

Image Tag - Like Instagram - Click Shop

```html
<ngx-image-tagger 
    [tagger]="data.tagger" 
    [isShowShop]="true" 
    [isShowPrice]="true" 
    [isShowLink]="true" 
    [isShowThumbnail]="true" 
    [isAllowCreate]="false" 
    [placeholderCreateTitle]="'Tag your product!'"
    [placeholderLink]="'Link'"
    [placeholderPrice]="'Price'"
    [onShowTagMode]="'IconClick'"
    [imageClassList]="''"
    [inputClassList]="''"
    [backgroundColor]="'#03a9f4'"
    [borderColor]="'#007ac1'"
    [textColor]="'#ffffff'"
    (taggerChange)="data.tagger = $event">
</ngx-image-tagger>
```

Image Tag - Like Instagram - Create Tag

```html
<ngx-image-tagger 
    [tagger]="data.taggerCreate" 
    [isShowShop]="false" 
    [isShowPrice]="true" 
    [isShowLink]="true" 
    [isShowThumbnail]="true" 
    [isAllowCreate]="true" 
    [placeholderCreateTitle]="'Tag your product!'"
    [placeholderLink]="'Link'"
    [placeholderPrice]="'Price'"
    [onShowTagMode]="'IconClick'"
    [imageClassList]="''"
    [inputClassList]="''"
    [backgroundColor]="'#03a9f4'"
    [borderColor]="'#007ac1'"
    [textColor]="'#ffffff'"
    (taggerChange)="data.taggerCreate = $event">
</ngx-image-tagger>
```

Image Tag - Like Instagram - On Click Pin

```html
<ngx-image-tagger 
    [tagger]="data.taggerClick" 
    [isShowShop]="true" 
    [isShowPrice]="true" 
    [isShowLink]="true" 
    [isShowThumbnail]="true" 
    [isAllowCreate]="false" 
    [placeholderCreateTitle]="'Tag your product!'"
    [placeholderLink]="'Link'"
    [placeholderPrice]="'Price'"
    [onShowTagMode]="'Click'"
    [imageClassList]="''"
    [inputClassList]="''"
    [backgroundColor]="'#03a9f4'"
    [borderColor]="'#007ac1'"
    [textColor]="'#ffffff'"
    (taggerChange)="data.taggerClick = $event">
</ngx-image-tagger>
```

### Option (Input & Output)

| name | description | default value   |
| :---------- | :------------------------------------------------------------ | :-------------- |
| tagger | Value of the tagger. | refer TaggerModel |
| isShowShop | Configuration Show/Hide Shop | false |
| isShowPrice | Configuration Show/Hide Price | true |
| isShowLink | Configuration Show/Hide Link | true |
| isShowThumbnail | Configuration Show/Hide Thumbnail | true |
| isAllowCreate | Configuration for Enabled Create Mode | false |
| placeholderCreateTitle | Title Modal Create  | Tag your product! |
| placeholderLink | Placeholder for Link | Link |
| placeholderPrice | Placeholder for Price | Price |
| onShowTagMode | Mode for Tag (Hover, Click, IconClick) | Hover |
| imageClassList | Custom class Image |
| inputClassList | Custom Class Input |
| backgroundColor | Background color | #03a9f4 |
| borderColor | Border color | #007ac1 |
| textColor | Text color | #ffffff |
| taggerChange | Output for tag | refer TaggerModel |

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
