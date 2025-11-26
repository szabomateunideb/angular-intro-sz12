import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-bindings-directives',
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    NgIf,
    NgForOf,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './bindings-directives.html',
  styleUrl: './bindings-directives.css',
})
export class BindingsDirectives {
  title: string = 'Adatkötés és Direktívák';
  userInput = '';
  isVisible: boolean = true;
  items = ['Alma', 'Banán', 'Cseresznye'];
  selectedFruit = 'Alma';
  isHighlighted = false;
  fontSize: number = 16;

  toggleHighlight(){
    this.isHighlighted = !this.isHighlighted;
  }

}
