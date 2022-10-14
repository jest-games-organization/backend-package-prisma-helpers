import { Enumerable } from '../../shared/types/Enumerable';

export type NestedDateTimeFilter = {
  equals?: Date | string;
  in?: Enumerable<Date> | Enumerable<string>;
  notIn?: Enumerable<Date> | Enumerable<string>;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: NestedDateTimeFilter | Date | string;
};
