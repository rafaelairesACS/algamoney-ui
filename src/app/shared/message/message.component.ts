import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="alert alert-danger" >
      {{text}}
    </div>
  ` ,
  styles: []
})
export class MessageComponent {
  @Input() error:string;
  @Input() control: FormControl;
  @Input() text: FormControl;

  temErro() : boolean{
    return this.control.hasError(this.error) && this.control.dirty
  }
}
