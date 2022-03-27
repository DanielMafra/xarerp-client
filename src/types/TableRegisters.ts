export type TableHeads = {
  key: string;
  title: string;
  width: number;
}

export type TableRegisters = {
  endpoint: string;
  key: string;
  roles: string[];
  tableHeads: TableHeads[];
  tableTitle: string;
}
