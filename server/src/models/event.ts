export class Event {
    id!: number;
    name!: string;
    description!: string;
    date!: string;
    zip_code!: number;
    image!: string;
  
    constructor(input: Event) {
      Object.assign(this, input);
  }
  }