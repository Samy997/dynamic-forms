import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-not-available',
  standalone: true,
  imports: [],
  templateUrl: './not-available.component.html',
  styleUrl: './not-available.component.scss'
})
export class NotAvailableComponent {
  @Input() input!: any;
  @Output() onClick = new EventEmitter();
}
