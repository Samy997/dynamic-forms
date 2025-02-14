import { InputField } from './input';

export class Textbox extends InputField {
  placeholder: string;

  constructor(input: any) {
    super(input);
    this.placeholder = input.placeholder || '';
  }
}