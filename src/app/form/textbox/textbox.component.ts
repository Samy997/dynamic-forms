import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Textbox } from '../../../shared/classes/textbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent {
  @Input() input!: Textbox;
  @Output() onClick = new EventEmitter();
}
