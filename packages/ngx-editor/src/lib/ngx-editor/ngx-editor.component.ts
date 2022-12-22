import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import * as ClassicEditor from '@ngodings/ckeditor5';
import { Mention, Tag } from '../model/editor';

@Component({
  selector: 'ngx-editor',
  templateUrl: './ngx-editor.component.html',
  styleUrls: ['./ngx-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxEditorComponent implements OnInit {
  public Editor = ClassicEditor;

  @Input() data = '';
  @Input() placeholder = '';
  @Input() isSimple = false;
  @Input() tags: Tag[] = [];
  @Input() mentions: Mention[] = [];

  public editorConfig: any;

  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    let items: string[] = [];
    if (this.isSimple) {
      items = [
        'bold',
        'italic',
        'underline',
        'alignment',
      ];
    };
    this.editorConfig = {
      placeholder: this.placeholder,
      mention: {
        dropdownLimit: 5,
        commitKeys: [9, 13, 32],
        feeds: [
          {
            marker: '#',
            feed: (query: string) => this.getTags(query, this),
            minimumCharacters: 1,
            itemRenderer: this.customItemRendererTags,
          },
          {
            marker: '@',
            feed: (query: string) => this.getMention(query, this),
            minimumCharacters: 1,
            itemRenderer: this.customItemRendererUser,
          }
        ]
      },
      language: 'es',
    };
    if (items.length > 0) {
      this.editorConfig.toolbar = {
        viewportTopOffset: 55,
        items,
      };
    }
  }

  getTags(query: string, me: any): Tag[] {
    const tags: Tag[] = Object.assign([], this.tags);
    let result = tags.filter(s => s.tag.includes(query));
    return result;
  }

  getMention(query: string, me: any): Mention[] {
    let result = this.mentions.filter(s => s.username.includes(query));
    return result;
  }

  customItemRendererTags(item: Tag) {
    console.log("item", item);
    const itemElement = document.createElement('div');

    itemElement.classList.add('custom-item');
    itemElement.id = `mention-list-item-${item.id}`;
    itemElement.textContent = `${item.tag} `;

    return itemElement;
  }

  customItemRendererUser(item: Mention) {
    const itemElement = document.createElement('div');

    itemElement.classList.add('custom-item-user');
    itemElement.id = `mention-list-item-${item.username}`;

    const imgElement = document.createElement('div');
    imgElement.classList.add('custom-item-img-container');

    const oImg = document.createElement("img");
    oImg.setAttribute('src', `${item.profile_picture}`);
    oImg.classList.add('custom-item-img');
    imgElement.appendChild(oImg);
    itemElement.appendChild(imgElement);

    const nameElement = document.createElement('div');

    nameElement.classList.add('custom-item-name');
    nameElement.textContent = `${item.full_name} `;

    const usernameElement = document.createElement('div');

    usernameElement.classList.add('custom-item-username');
    usernameElement.textContent = item.username;

    nameElement.appendChild(usernameElement);

    itemElement.appendChild(nameElement);

    return itemElement;
  }

  onChange(event: any) {
    this.dataChange.emit(event);
  }
}
