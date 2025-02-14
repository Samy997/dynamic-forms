import { Component, ComponentRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Button } from '../../shared/classes/button';
import { InputField } from '../../shared/classes/input';
import { Textarea } from '../../shared/classes/textarea';
import { Textbox } from '../../shared/classes/textbox';
import { ButtonComponent } from './button/button.component';
import { NotAvailableComponent } from './not-available/not-available.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TextboxComponent } from './textbox/textbox.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() formData!: Array<InputField | Textarea | Textbox | Button>;
  @Output() inputSelect = new EventEmitter();

  @ViewChild('inputsContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  componentRefs: ComponentRef<any>[] = [];

  stopSubscription = new Subject();

  ngOnInit() {
    this.loadComponents();
  }

  loadComponents() {
    this.container.clear();

    this.formData.forEach(input => {
      const componentRef = this.componentToLoad(input);
      componentRef.instance.input = input;

      this.componentRefs.push(componentRef);

      componentRef.instance.onClick.pipe(takeUntil(this.stopSubscription)).subscribe(_ => {
        this.inputSelect.emit(input);
      })
    })
  }

  componentToLoad(input: InputField | Textbox | Textarea | Button) {
    if(input instanceof Textbox) {
      return this.container.createComponent(TextboxComponent);
    } else if(input instanceof Textarea) {
      return this.container.createComponent(TextareaComponent)
    } else if(input instanceof Button) {
      return this.container.createComponent(ButtonComponent);
    } else {
      return this.container.createComponent(NotAvailableComponent)
    }
  }

  ngOnDestroy() {
    this.stopSubscription.next(true);
  }
}
