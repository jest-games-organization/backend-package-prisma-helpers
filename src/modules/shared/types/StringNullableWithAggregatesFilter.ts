import { Enumerable } from '../../shared/types/Enumerable';
import { QueryMode } from '../../shared/types/QueryMode';
import { NestedIntNullableFilter } from './NestedIntNullableFilter';
import { NestedStringNullableFilter } from './NestedStringNullableFilter';
import { NestedStringNullableWithAggregatesFilter } from './NestedStringNullableWithAggregatesFilter';

export type StringNullableWithAggregatesFilter = {
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
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter | string | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
};
