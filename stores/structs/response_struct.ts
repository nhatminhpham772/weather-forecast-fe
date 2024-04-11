import {
    string,
    number,
    array,
    record,
    object,
    size,
    optional,
    defaulted,
    assign,
    type Infer,
    any,
  } from "superstruct";
  
export const DataObjectSchema = object({
    code: any(),
    data: object(),
});

export const DataArraySchema = object({
    code: any(),
    data: array(),
});


export const DataStringSchema = object({
    code: any(),
    data: string(),
});


export type DataObject = Infer<typeof DataObjectSchema>;
export type DataArray = Infer<typeof DataArraySchema>;
export type DataString = Infer<typeof DataStringSchema>;
  