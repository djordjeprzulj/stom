import { Status } from './status';
import { GrupaIntervencija } from './grupa-intervencija';

export class VrstaIntervencije {
  id: number;
  iznos: number;
  opis: string;
  status: Status;
  grupaIntervencija: GrupaIntervencija;
}
