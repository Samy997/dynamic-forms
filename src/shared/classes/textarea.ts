import { InputField } from "./input";

export class Textarea extends InputField {
  rows: number;
  cols: number;

  constructor(input: any) {
    super(input);
    this.cols = input.cols || 0;
    this.rows = input.rows || 0
  }
}