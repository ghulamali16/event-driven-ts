export class Event {
  name: string;
  data: any;

  constructor(name: string, data: any = null) {
    this.name = name;
    this.data = data;
  }
}
