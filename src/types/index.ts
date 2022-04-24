export interface ICalculator {
    bill: string | number;
    persons: string | number;
    tip: IOptions;
    total: number;
  }
  
  export interface IOptions {
    value: number;
    label: string;
  }