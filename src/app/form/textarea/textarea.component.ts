import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Textarea } from '../../../shared/classes/textarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() input!: Textarea;
  @Output() onClick = new EventEmitter();
}
