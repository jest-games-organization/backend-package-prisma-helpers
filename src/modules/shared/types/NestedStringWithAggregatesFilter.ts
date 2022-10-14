import { Enumerable } from '../../shared/types/Enumerable';
import { NestedIntFilter } from './NestedIntFilter';
import { NestedStringFilter } from './NestedStringFilter';

export type NestedStringWithAggregatesFilter = {
  equals?: string;
  in?: Enumerable<string>;
  notIn?: Enumerable<string>;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter | string;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
};
