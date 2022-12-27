import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-ngx-pipes',
    templateUrl: './ngx-pipes.component.html',
    styleUrls: ['./ngx-pipes.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxPipesComponent implements OnInit {

    input = 'Lorem ipsum dolor sit amet';

    sample1 = `<div>Updated: {{now | timeAgo}}</div>
<div>Updated: {{lastWeek | timeAgo}}</div>`;
    sample2 = `This is a picture of {{ 'mountain' | aOrAn}}`;
    sample3 = `{{'Hey foo bar' | shorten: 3: '...'}}`;
    sample4 = `{{'foo bar' | firstcase }}`;
    sample5 = `{{"shaquille o'neal" | titlecase }}`;
    sample6 = `{{'Foo' | prefixsuffix: 'nice prefix ': ' and awesome suffix!'}}`;
    sample7 = `<li *ngFor="let item of 1 | range: 6 ">{{ item }}</li>`;
    sample8 = ` <li *ngFor="let item of items | reverse">{{ item }}</li>`;
    sample9 = ` <li *ngFor="let item of items | unique">{{ item }}</li>`;
    sample10 = `<div><li *ngFor="let item of users | filterBy: ['id']: 1">{{ item.first_name }}</li></div>
<div><li *ngFor="let item of users | filterBy: ['work.company']: 'Bar Tech'">{{ item.first_name }}</li></div>`;
    sample11 = `<li *ngFor="let item of deepObj | orderBy: 'amount' ">{{ item.name }} - {{ item.amount }}</li>
<li *ngFor="let item of deepObj | orderBy: 'deep.prop'">{{ item.name }} - {{ item.deep.prop}}</li>`;
    sample12 = `{{ [1, 2, 3, 1, 2, 3] | min }}`;
    sample13 = `{{ [1, 2, 3, 1, 2, 3] | max }}`;
    sample14 = `{{ [1, 2, 3, 4] | sum }}`;
    sample15 = `{{ [1, 2, 3] | average }}`;
    sample16 = `{{ 42.123 | precision: 2 }}`;
    sample17 = `{{ 1.0995116e12 | bytes }}`;

    now = new Date();
    lastWeek = moment().subtract(10, 'days');

    items = [1, 2, 3, 1, 2, 2];

    users = [
        { id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech' } },
        { id: 2, first_name: 'Jane', last_name: 'West', work: { company: 'AAA Solutions' } },
        { id: 3, first_name: 'Bruce', last_name: 'John', work: { company: 'Bar Tech' } },
        { id: 4, first_name: 'William', last_name: 'Cent', work: { company: 'Foo Tech' }, arr: [{ name: 'foo' }] }
    ];

    deepObj = [
        { id: 1, name: 'John', amount: 1337, deep: { prop: 4 } },
        { id: 2, name: 'Michael', amount: 42, deep: { prop: 2 } },
        { id: 3, name: 'Dan', amount: 1, deep: { prop: 1 } },
        { id: 4, name: 'Dave', amount: 2, deep: { prop: 3 } }
    ];
    constructor(public appHelper: AppHelper, public appData: AppData,) {

    }

    async ngOnInit() {
    }
}
