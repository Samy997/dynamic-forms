import { InputField } from "./input";

export class Button extends InputField {
  caption: string;

  constructor(input: any) {
    super(input);
    this.caption = input.caption;
  }
}