import { Enumerable } from '../../shared/types/Enumerable';
import { NestedFloatFilter } from './NestedFloatFilter';
import { NestedIntFilter } from './NestedIntFilter';

export type NestedIntWithAggregatesFilter = {
  equals?: number;
  in?: Enumerable<number>;
  notIn?: Enumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter | number;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
};
