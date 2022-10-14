import { Enumerable } from '../../shared/types/Enumerable';
import { NestedIntFilter } from './NestedIntFilter';

export type IntFilter = {
  equals?: number;
  in?: Enumerable<number>;
  notIn?: Enumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter | number;
};
