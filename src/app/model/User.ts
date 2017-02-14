import { Serializable } from 'app/interface/Serializable';

export class User extends Serializable {
  name: string;
  password:string;
  title: string;
  phone: string;
  mail: string;
  address: string;

  constructor(json: any) {
  	super(json);
  }
}
