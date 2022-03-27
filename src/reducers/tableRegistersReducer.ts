import { reducerActionType } from "../types/reducerActionType";
import { TableRegisters } from "../types/TableRegisters";

type Heads = {
  key: string,
  title: string,
  width: number
}

export type TableRegistersType = {
  initialFetch: boolean;
  loadingTable: boolean;
  loadingPage: boolean;
  results: TableRegisters[];
  refreshTable: string;
  heads: Heads[];
  title: string;
  searchQuery: string;
  totalRegisters: number;
  totalPages: number;
  currentPage: number;
}

export const tableRegistersInitialState: TableRegistersType = {
  initialFetch: true,
  loadingTable: true,
  loadingPage: false,
  results: [],
  refreshTable: '',
  heads: [],
  title: '',
  searchQuery: '',
  totalRegisters: 0,
  totalPages: 0,
  currentPage: 0,
}

export const tableRegistersReducer = (state: TableRegistersType, action: reducerActionType) => {
  switch (action.type) {
    case 'TABLEREGISTERS_SET_INITIALFETCH':
      return { ...state, initialFetch: action.payload.initialFetch };
    case 'TABLEREGISTERS_SET_LOADINGTABLE':
      return { ...state, loadingTable: action.payload.loadingTable };
    case 'TABLEREGISTERS_SET_LOADINGPAGE':
      return { ...state, loadingPage: action.payload.loadingPage };
    case 'TABLEREGISTERS_SET_RESULTS':
      return { ...state, results: action.payload.results };
    case 'TABLEREGISTERS_SET_REFRESHTABLE':
      return { ...state, refreshTable: action.payload.refreshTable };
    case 'TABLEREGISTERS_SET_HEADS':
      return { ...state, heads: action.payload.heads };
    case 'TABLEREGISTERS_SET_TITLE':
      return { ...state, title: action.payload.title };
    case 'TABLEREGISTERS_SET_SEARCHQUERY':
      return { ...state, searchQuery: action.payload.searchQuery };
    case 'TABLEREGISTERS_SET_TOTALREGISTERS':
      return { ...state, totalRegisters: action.payload.totalRegisters };
    case 'TABLEREGISTERS_SET_TOTALPAGES':
      return { ...state, totalPages: action.payload.totalPages };
    case 'TABLEREGISTERS_SET_CURRENTPAGE':
      return { ...state, currentPage: action.payload.currentPage };
  }

  return state;
}
