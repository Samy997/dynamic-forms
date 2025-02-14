import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';
import { InputField } from '../../shared/classes/input';
import { Textbox } from '../../shared/classes/textbox';
import { Textarea } from '../../shared/classes/textarea';
import { Button } from '../../shared/classes/button';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnChanges {
  @Input() selectedInput!: InputField | Textbox | Textarea | Button;
  selectedInputValues: string[] = [];
  inputForm = new UntypedFormGroup({});

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['selectedInput'].currentValue?.id !== changes['selectedInput'].previousValue?.id) {
        this.initForm();
      }
  }
  
  initForm() {
    this.inputForm = new UntypedFormGroup({
      name: new FormControl(this.selectedInput.name, [Validators.minLength(5), Validators.maxLength(10)]),
      border: new UntypedFormGroup({
        color: new FormControl(this.selectedInput.border.color),
        size: new FormControl(this.selectedInput.border.size)
      })
    });
  
    this.addTypeBasedInputs();
    this.formChanges();
  }

  addTypeBasedInputs() {
    if(this.selectedInput instanceof Textbox) {
      this.inputForm.addControl('placeholder', new FormControl(this.selectedInput.placeholder))
    } else if(this.selectedInput instanceof Textarea) {
      this.inputForm.addControl('cols', new FormControl(this.selectedInput.cols))
      this.inputForm.addControl('rows', new FormControl(this.selectedInput.rows))
    } else if(this.selectedInput instanceof Button) {
      this.inputForm.addControl('caption', new FormControl(this.selectedInput.caption))
    }

    this.inputForm.updateValueAndValidity();
  }

  formChanges() {
    this.inputForm.valueChanges.subscribe(v => {
      this.selectedInput.name = v.name;
      this.selectedInput.border = v.border;
      
      if(this.selectedInput instanceof Textbox) {
        this.selectedInput.placeholder = v.placeholder;
      }
      if(this.selectedInput instanceof Textarea) {
        this.selectedInput.cols = v.cols;
        this.selectedInput.rows = v.rows;
      }
      if(this.selectedInput instanceof Button) {
        this.selectedInput.caption = v.caption;
      }
    })
  }
}
