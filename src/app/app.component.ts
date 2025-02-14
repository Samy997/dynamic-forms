import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { SettingsComponent } from './settings/settings.component';
import { FormDataService } from '../shared/services/form-data.service';
import { Textarea } from '../shared/classes/textarea';
import { Textbox } from '../shared/classes/textbox';
import { Button } from '../shared/classes/button';
import { InputField } from '../shared/classes/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-forms';
  formData!: Array<InputField | Textarea | Textbox | Button>;
  selectedInput: any;

  constructor(private readonly formDataService: FormDataService) {}

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
  }

  onInputSelect(input: any) {
    this.selectedInput = input;
  }
}
