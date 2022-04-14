export interface IProductDto {
  _id?: string;
  parent_id?: string;
  img_url?: string;
  product_code?: string;
  product_name?: string;
  sale_price: number;
  total: number;
  description?: string;
  promotional_code?: string;
}

export enum ProductStatus {
  active = 'active',
  lock = 'lock',
}

export interface IFilterProductsDto
  extends Omit<IProductDto, '_id' | 'initial_price' | 'sale_price' | 'total'> {
  page?: number;
  limit?: number;
  sortBy?: object;
  initial_price_start?: number;
  initial_price_end?: number;
  sale_price_start?: number;
  sale_price_end?: number;
  total_start?: number;
  total_end?: number;
  status?: ProductStatus;
}

export interface IResponseProductDto {
  data: IProductDto[];
  total: number;
  limit?: number;
  page?: number;
  last_page?: number;
}

export interface IResponseProductsHomeDto {
  products_personal: IProductDto[];
  products_cokes: IProductDto[];
  products_canned_food: IProductDto[];
}

export interface IProductsState {
  products: IResponseProductDto;
  loading?: boolean;
  error?: any;
  message?: string;
  productDetail?: IProductDto;
  productsHome?: IResponseProductsHomeDto;
}
