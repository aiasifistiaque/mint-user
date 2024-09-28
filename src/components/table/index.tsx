export { default as TABLE_THEME } from './table-components/theme';
export { default as SimpleTable } from './table-components/SimpleTable';
export { default as TableContainer } from './table-components/TableContainer';
export { default as useIsMobile } from './table-components/useIsMobile';
export { default as TableSkeleton } from './table-components/TableSkeleton';
export { default as TableErrorMessage } from './table-components/TableErrorMessage';
export { default as ResultContainer } from './table-components/ResultContainer';
export { default as Pagination } from './table-components/Pagination';
export { default as SquareButton } from './table-components/SquareButton';
export { default as TableHeading } from './table-components/TableHeading';
export { default as Toast } from './table-components/Toast';
export { default as TableTitle } from './table-components/Title';
export { default as Headers } from './table-components/Headers';
export { default as TableRowComponent } from './table-components/TableRowComponent';
export { default as TableRow } from './table-components/TableRow';
///CUSTOM EXPORTS
export { updateTable, setFields, setPreferences } from '@/store/slices/tableSlice';
export { useAppDispatch, useAppSelector, Column, PLACEHOLDER_IMAGE } from '@/components';
export { default as Table } from './table-components/Table';
export { default as CustomTd } from './table-components/CustomTd';
export { default as TableData } from './table-components/TableData';

export { useGetAllQuery } from '@/store/services/commonApi';

import { TableProps } from '@chakra-ui/react';

export type CustomTableProps = TableProps & {
	children: React.ReactNode;
	header?: React.ReactNode;
	data: any;
	isLoading: boolean;
	col?: number;
	filters?: string;
	preferences?: any;
	path?: any;
	headers?: string[];
	hidePreferences?: boolean;
	selectable?: boolean;
	selectedItems?: any;
	isError?: boolean;
	search?: boolean;
	showFilters?: any;
	error?: any;
	table?: any;
	select?: {
		show: boolean;
		menu: any[];
	};
};

export const formatDataKey = (dataKey: string) => {
	return dataKey
		.split('.')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
