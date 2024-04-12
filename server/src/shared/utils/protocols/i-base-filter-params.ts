export interface IBaseFilterParams {
  id?: number | number[] | string | string[];
  neId?: number | number[] | string | string[];
  initDate?: Date;
  finalDate?: Date;
  offset?: string | number;
  limit?: string | number;
  isActive?: boolean;
}
