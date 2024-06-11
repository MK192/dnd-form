export interface FormInputType {
  id: string;
  _type: string;
  _name: string;
  _placeholder?: string;
  _label: string;
  _radioOptions?: {
    value: string;
  }[];
}

export interface OptionsType {
  value: string;
  name: string;
}
