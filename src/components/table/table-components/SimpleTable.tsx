import { Table, Thead, Tr, Tbody, Flex, Text, CloseButton } from '@chakra-ui/react';
import React from 'react';

import { useAppSelector } from '@/components';

import {
	TableContainer,
	TableSkeleton,
	ResultContainer,
	TableErrorMessage,
	CustomTableProps,
} from '../';

const CustomTable: React.FC<CustomTableProps> = ({
	headers,
	children,
	filters,
	header,
	data,
	isLoading,
	col,
	preferences,
	path,
	hidePreferences,
	selectedItems,
	isError = false,
	select,
	showFilters = true,
	search = true,
	table,
	error,
}) => {
	const tbody = isLoading ? (
		<TableSkeleton
			row={10}
			col={col || 5}
		/>
	) : (
		children
	);

	return (
		<>
			<TableContainer>
				<Table size='sm'>
					<Thead>
						<Tr>{header}</Tr>
					</Thead>
					<Tbody>{tbody}</Tbody>
				</Table>
			</TableContainer>
			{data?.docsInPage == 0 && (
				<TableErrorMessage title='No results found.'>
					There {`aren't`} any results for that query. Try using different filters.
				</TableErrorMessage>
			)}
			{isError && (
				<TableErrorMessage title='Error Fetching Data.'>
					{error?.data?.message ||
						`There has been an error while fetching data. Please try refreshing the page.`}
				</TableErrorMessage>
			)}
			<ResultContainer data={data} />
		</>
	);
};

export default CustomTable;
