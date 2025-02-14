import { Injectable } from '@angular/core';
import { FORM_DATA } from '../../form-data';
import { FormTypes } from '../enums/form-types.enum';
import { Textbox } from '../classes/textbox';
import { InputField } from '../classes/input';
import { Textarea } from '../classes/textarea';
import { Button } from '../classes/button';

@Injectable({providedIn: 'root'})
export class FormDataService {
  formData = [...FORM_DATA];
  constructor() { }
  
  getFormData() {
    return this.formData.map(input => {
      switch (input.type) {
        case FormTypes.TEXTBOX:
          return new Textbox(input);
        case FormTypes.TEXTAREA:
          return new Textarea(input);
        case FormTypes.BUTTON:
          return new Button(input);
      
        default:
          return new InputField(input);
      }
    })
  }
}