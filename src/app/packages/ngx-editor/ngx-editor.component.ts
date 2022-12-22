import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppHelper } from 'src/app/app.helper';

import { AppData } from 'src/app/app.data';
import { Mention, Tag } from 'packages/ngx-editor/src/public-api';

@Component({
    selector: 'ngodings-ngx-editor',
    templateUrl: './ngx-editor.component.html',
    styleUrls: ['./ngx-editor.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxEditorComponent implements OnInit {

    text = '';

    tags: Tag[] = [
        { tag: "Angular", id: "#Angular" },
        { tag: "Ckeditor", id: "#Ckeditor" },
        { tag: "Mountain", id: "#Mountain" },
        { tag: "Package", id: "#Package" },
    ];

    mentions: Mention[] = [
        { id: "@alidihaw", full_name: "Ali", username: "alidihaw", profile_picture: "https://i.pravatar.cc/150?img=3" },
        { id: "@ngodings", full_name: "Ngodings", username: "ngodings", profile_picture: "https://i.pravatar.cc/150?img=3" },
    ];

    sample1 =
        `<ngx-editor [(data)]="text" [tags]="tags" [mentions]="mentions"></ngx-editor>

<ngx-editor [(data)]="text" [tags]="tags" [mentions]="mentions" [isSimple]="true"></ngx-editor>
        
<ngx-view-editor [data]="text"></ngx-view-editor>`;

    constructor(public appHelper: AppHelper, public appData: AppData) {

    }

    async ngOnInit() {
    }
}
