import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../../shared/classes/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() input!: Button;
  @Output() onClick = new EventEmitter();
}
