import { Enumerable } from '../../shared/types/Enumerable';
import { NestedIntNullableFilter } from './NestedIntNullableFilter';
import { NestedStringNullableFilter } from './NestedStringNullableFilter';

export type NestedStringNullableWithAggregatesFilter = {
  equals?: string | null;
  in?: Enumerable<string> | null;
  notIn?: Enumerable<string> | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter | string | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
};
