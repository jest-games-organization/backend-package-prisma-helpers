import { Enumerable } from '../../shared/types/Enumerable';
import { QueryMode } from '../../shared/types/QueryMode';
import { NestedStringNullableFilter } from './NestedStringNullableFilter';

export type StringNullableFilter = {
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
  not?: NestedStringNullableFilter | string | null;
};
