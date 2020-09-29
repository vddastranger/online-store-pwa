import { ID } from '@datorama/akita';

export interface Sku {
  readonly id: ID;
  readonly lastChange: Date;
  readonly name: string;
  readonly price: number;
  readonly parent: SkuParent;
}

export interface SkuParent {
  readonly id: ID;
  readonly name: string;
}
