import { Enumerable } from '../../shared/types/Enumerable';

export type NestedIntNullableFilter = {
  equals?: number | null;
  in?: Enumerable<number> | null;
  notIn?: Enumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter | number | null;
};
