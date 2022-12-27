# @ngodings/ngx-pipes

Useful pipes for Angular with no external dependencies with Latest Angular

## Demo - Angular v15

[https://npm.ngodings.com/packages/ngx-pipes](https://npm.ngodings.com/packages/ngx-pipes)

## Support Me

If you like this package I will be happy that you support me on Buy me a coffee :) <br />
Buy me coffee: [https://www.buymeacoffee.com/alidihaw](https://www.buymeacoffee.com/alidihaw) <br />
Indonesia People: [https://sociabuzz.com/dihaw](https://sociabuzz.com/dihaw)


## Table of contents

 - [Installation](#installation)
 - [String](#string)
    - [timeAgo](#timeago)
    - [aOrAn](#aoran)
    - [shorten](#shorten)
    - [firstcase](#firstcase)
    - [titlecase](#titlecase)
    - [prefixsuffix](#prefixsuffix)
 - [Array](#Array)   
    - [range](#range)
    - [reverse](#reverse)
    - [unique](#unique)
    - [filterBy](#filterby)
    - [orderBy](#orderby)
 - [Math](#math)   
    - [min](#min)
    - [max](#max)
    - [sum](#sum)
    - [average](#average)
    - [precision](#precision)
    - [bytes](#bytes)

## Getting Started

### Installing and Importing

Install the package by command:

```sh
 npm install @ngodings/ngx-pipes --save
```

Import the module


1. Use npm to install the package

  ```terminal
 npm install @ngodings/ngx-pipes --save
  ```

2. You could either add into your module `imports` the `NgxPipesModule` in order to add all of the pipes, Or add a specific module such as `NgxArrayPipesModule`,  `NgxStringPipesModule`, `NgxMathPipesModule`

  ```typescript
  import {NgxPipesModule} from '@ngodings/ngx-pipes';
  
  @NgModule({
   // ...
   imports: [
     // ...
     NgxPipesModule
   ]
  })
  ```

3. Pipes are also injectable and can be used in Components / Services / etc..

  ```typescript  
  import {ReversePipe} from 'ngx-pipes';

  @Component({
    // ..
    providers: [ReversePipe]
  })
  export class AppComponent {
    constructor(private reversePipe: ReversePipe) {
      this.reversePipe.transform('foo'); // Returns: "oof"
    }
    // ..
  }
  ```

4. You can also use pipes as part of your template for ex. 

```html
<p>{{ 'foo' | reverse }}</p> <!-- Output: "oof" -->
```

and it's also possible to stack multiple pipes

```html
<p>{{ 'foo' | titlecase | reverse }}</p> <!-- Output: "Oof" -->
```

## String

### timeAgo

Time ago pipe converts date to 'just now', 'X days ago', 'last week', 'X days ago', etc..

**Usage:** `string | timeAgo`
```typescript
import * as moment from 'moment';

const now = new Date();

// timeAgo also supports moment.js objects
const lastWeek = moment().subtract(10, 'days');
```

```html
<span>Updated: {{now | timeAgo}}</span> <!-- Output: "just now" -->
<span>Updated: {{lastWeek | timeAgo}}</span> <!-- Output: "last week" -->
```

### aOrAn

Prefixes input string with "a" or "an".

**Usage:** `string | aOrAn`

```html
<span>This is a picture of {{imageDescription | aOrAn}}</span>
```

### shorten

Shortening a string by length and providing a custom string to denote an omission

**Usage:** `string | shorten: length: [suffix|optional]: [wordBreak boolean|optional]`

```html
<p>{{'Hey foo bar' | shorten: 3: '...'}}</p> <!-- Output: "Hey..." -->
```

### firstcase

Uppercase first letter of first word

```html
<p>{{'foo bar' | firstcase }}</p> <!-- Output: "Foo bar" -->
```

### titlecase

Uppercase first letter every word

```html
<p>{{'foo bar' | titlecase }}</p> <!-- Output: "Foo Bar" -->
<p>{{'shaquille o'neal' | titlecase }}</p> <!-- Output: "Shaquille O'Neal" -->
```

### prefixsuffix

Wrap a string between a prefix and a suffix

**Usage:** `string | prefixsuffix: prefix: suffix`

```html
<p>{{'Foo' | prefixsuffix: 'nice prefix ': ' and awesome suffix!'}}</p> <!-- Output: "nice prefix Foo and awesome suffix!" -->
```

## Array

### range

Returns an array with range of numbers

**Usage:** `range: [start: number, default = '1']: [count: number]: [step: number | optional, default = '1']`

```typescript
this.items = this.rangePipe.transform(1, 5); // Returns: [1, 2, 3, 4, 5]
```

```html
<li *ngFor="let item of items"> <!-- Array: [1, 2, 3, 4, 5] -->
```

### reverse

Reverses an array

**Usage:** `array | reverse`

```typescript
this.items = [1, 2, 3];
```

```html
<li *ngFor="let item of items | reverse"> <!-- Array: [3, 2, 1] -->
```

### unique

Removes duplicates from array

**Usage:** `array | unique: 'Property (Optional)'`

```typescript
this.items = [1, 2, 3, 1, 2, 3];
```

```html
<li *ngFor="let item of items | unique"> <!-- Array: [1, 2, 3] -->
```

### filterBy

Returns object array of grouped by items by discriminator

**Usage:** `array | filterBy: [prop, nested.prop, ...]: search: [strict | optional]`

```typescript
this.users = [
   {id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech' }},
   {id: 2, first_name: 'Jane', last_name: 'West', work: { company: 'AAA Solutions' }},
   {id: 3, first_name: 'Bruce', last_name: 'John', work: { company: 'Bar Tech' }},
   {id: 4, first_name: 'William', last_name: 'Cent', work: { company: 'Foo Tech' }, arr: [{name: 'foo'}]}
];
```

```html
<!-- Returns users with `id` of 1 -->
<p>{{ users | filterBy: ['id']: 1 }}</p> 
<!-- Output: "[{id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech', previous_company: '' }}]" -->

<!-- filterBy also support nested properties -->
<p>{{ users | filterBy: ['work.company']: 'Bar Tech' }}</p> 
<!-- Output: "[{ "id": 3, "first_name": "Bruce", "last_name": "John", "work": { "company": "Bar Tech", "previous_company": "" } }]" -->

<!-- filterBy also support nested properties inside of an array -->
<p>{{ users | filterBy: ['arr.name']: 'foo' }}</p> 
<!-- Output: "[{id: 4, first_name: 'William', last_name: 'Cent', work: { company: 'Foo Tech' }, arr: [{name: 'foo'}]}]" -->

<!-- Return users whose first name or last name is 'John'. -->
<p>{{ users | filterBy: ['first_name', 'last_name']: 'John' }}</p>
<!-- Output: "[{id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech', previous_company: '' }}]" -->

<!-- Return users whose first name or last name is 'John' or 'Cent'. -->
<p>{{ users | filterBy: ['first_name', 'last_name']: ['John', 'Cent'] }}</p>
<!-- Output: "[{id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech', previous_company: '' }}, {id: 3, first_name: 'Bruce', last_name: 'John', work: { company: 'Bar Tech' }}, {id: 4, first_name: 'William', last_name: 'Cent', work: { company: 'Foo Tech' }, arr: [{name: 'foo'}]}]" -->
```

### orderBy

Returns ordered array by configuration 

**Usage:** `array | orderBy: [prop, nested.prop, array of props, ...]`

```typescript
const numbers = [2, 1, 3];

const obj = [
  {id: 4, name: 'Dave', amount: 2},
  {id: 2, name: 'Michael', amount: 2},
  {id: 3, name: 'Dan', amount: 1},
  {id: 1, name: 'John', amount: 1}
];

const deepObj = [
  {id: 1, name: 'John', amount: 1337, deep: {prop: 4}},
  {id: 2, name: 'Michael', amount: 42, deep: {prop: 2}},
  {id: 3, name: 'Dan', amount: 1, deep: {prop: 1}},
  {id: 4, name: 'Dave', amount: 2, deep: {prop: 3}}
];
```

```html
<!-- Returns array ordered by value -->
<p>{{ numbers | orderBy }}</p>  <!-- Output: [1, 2, 3] -->
<p>{{ numbers | orderBy: '-' }}</p>  <!-- Output: [3, 2, 1] -->

<!-- Returns array ordered by value of property -->
<p>{{ deepObj | orderBy: 'amount' }}</p>  
<!-- Output: [{id: 3, ...}, {id: 4, ...}, {id: 2, ...}, {id: 1, ...}] -->
<p>{{ deepObj | orderBy: '-amount' }}</p>  
<!-- Output: [{id: 1, ...}, {id: 2, ...}, {id: 4, ...}, {id: 3, ...}] -->

<!-- Returns array ordered by value of deep property -->
<p>{{ deepObj | orderBy: 'deep.prop' }}</p>  
<!-- Output: [{id: 3, ...}, {id: 2, ...}, {id: 4, ...}, {id: 1, ...}] -->
<p>{{ deepObj | orderBy: '-deep.prop' }}</p>  
<!-- Output: [{id: 1, ...}, {id: 4, ...}, {id: 2, ...}, {id: 3, ...}] -->

<!-- Returns array ordered by mutliple properties -->
<p>{{ obj | orderBy: ['amount', 'id'] }}</p>  
<!-- Output: [{id: 1, ...}, {id: 3, ...}, {id: 2, ...}, {id: 4, ...}] -->
```

## Math

### min

Returns the minimum of a given array

**Usage:** `array | min`

```html
<p>{{ [1, 2, 3, 1, 2, 3] | min }}</p> <!-- Output: "1" -->
```

### max

Returns the maximum of a given array

**Usage:** `array | max`

```html
<p>{{ [1, 2, 3, 1, 2, 3] | max }}</p> <!-- Output: "3" -->
```

### sum

Returns the sum of a given array

**Usage:** `array | sum`

```html
<p>{{ [1, 2, 3, 4] | sum }}</p> <!-- Output: "10" -->
```

### average

Returns the average of a given array

**Usage:** `array | average`

```html
<p>{{ [1, 2, 3] | average }}</p> <!-- Output: "2" -->
<p>{{ [1, 2] | average }}</p> <!-- Output: "1.5" -->
```

### precision

Returns round of a number by precision 

**Usage:** `number | precision: [precision | default = 0]`

```html
<p>{{ 42.123 | precision }}</p> <!-- Output: "43" -->
<p>{{ 42.123 | precision: 2 }}</p> <!-- Output: "42.12" -->
```

### bytes

Returns bytes with a unit symbol

**Usage:** `number | bytes: [precision]`

```html
<p>{{ 10 | bytes }}</p> <!-- Output: "10 B" -->
<p>{{ 1048576 | bytes }}</p> <!-- Output: "1 KB" -->
<p>{{ 1073741824 | bytes }}</p> <!-- Output: "1 MB" -->
<p>{{ 1.0995116e12 | bytes }}</p> <!-- Output: "1 GB" -->
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

## License

MIT @ Ali Abdul Wahid
