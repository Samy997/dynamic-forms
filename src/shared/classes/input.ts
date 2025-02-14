import { FormTypes } from "../enums/form-types.enum"

export class InputField {
  type: FormTypes;
  name: string;
  id: string;
  border: {
    color: string;
    size: string,
  }

  constructor(input: any) {
    this.type = input.type || '';
    this.name = input.name || '';
    this.id = input.id || '';
    this.border = input.border || {};
  }
}