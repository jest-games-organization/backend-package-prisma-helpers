import { Enumerable } from '../../shared/types/Enumerable';
import { NestedDateTimeFilter } from './NestedDateTimeFilter';
import { NestedIntFilter } from './NestedIntFilter';

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Date | string;
  in?: Enumerable<Date> | Enumerable<string>;
  notIn?: Enumerable<Date> | Enumerable<string>;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: NestedDateTimeWithAggregatesFilter | Date | string;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
};
