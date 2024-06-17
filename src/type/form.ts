export interface FormInputType {
  id: string;
  _type: string;
  _name: string;
  _placeholder?: string;
  _label: string;
  _options?: {
    value: string;
  }[];
}

export interface EditOptionsType {
  value: string;
  name: string;
}

export interface OptionsType {
  value: string;
}

export interface GeneratedFormType {
  fields: GeneratedFormInputType[];
}
export interface GeneratedFormInputType {
  value: string | number;
}
