# Daisy React Table

```ts
    declare module '@tanstack/table-core' {
        interface ColumnMeta<TData extends unknown, TValue> {
            filterComponent: (props: any) => any;
            isCustomFilterComponent: boolean;
        }
    }
```
