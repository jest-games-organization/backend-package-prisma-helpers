import { Enumerable } from '../../shared/types/Enumerable';
import { QueryMode } from '../../shared/types/QueryMode';
import { NestedStringFilter } from './NestedStringFilter';

export type StringFilter = {
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
  not?: NestedStringFilter | string;
};
