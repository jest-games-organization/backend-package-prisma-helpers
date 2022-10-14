import { Enumerable } from '../../shared/types/Enumerable';
import { QueryMode } from '../../shared/types/QueryMode';
import { NestedIntFilter } from './NestedIntFilter';
import { NestedStringFilter } from './NestedStringFilter';
import { NestedStringWithAggregatesFilter } from './NestedStringWithAggregatesFilter';

export type StringWithAggregatesFilter = {
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
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter | string;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
};
