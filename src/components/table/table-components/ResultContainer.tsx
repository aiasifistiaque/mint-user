import React, { FC } from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/react';

import { useAppSelector } from '@/components';
import { TABLE_THEME as THEME, useIsMobile, Pagination } from '../';

type ResultContainerProps = FlexProps & {
	data: any;
};

const ResultContainer: FC<ResultContainerProps> = ({ data, ...props }) => {
	const { selectedItems } = useAppSelector(state => state.table);
	const isMobile = useIsMobile();

	if (selectedItems.length > 0) {
		return null;
	}

	return (
		<Flex
			bg='sidebar.light'
			_dark={{ bg: 'sidebar.dark' }}
			pl={{ base: 0, md: 0 }}
			sx={{
				...styles.container,
				left: isMobile ? 0 : 0,
				w: isMobile ? '100vw' : 0,
				pb: isMobile ? 4 : 0,
				...props,
			}}>
			<Flex
				px={4}
				align='center'
				justify='space-between'
				gap={4}
				w='100%'
				bg='container.light'
				borderTop='1px solid'
				borderTopColor='stroke.deepL'
				_dark={{ bg: 'container.dark', borderTopColor: 'stroke.deepD' }}>
				<Text>
					<b>{data?.totalDocs || '--'}</b> results
				</Text>

				<Pagination data={data && data} />
			</Flex>
		</Flex>
	);
};

const styles = {
	container: {
		//borderTop: '1px solid',
		//borderTopColor: 'stroke.deepL',
		position: 'fixed',
		bottom: 0,
		// bg: 'container.light',
		// _dark: { bg: 'container.dark', borderTopColor: 'stroke.deepD' },
		overflow: 'scroll',
		maxW: '100%',
		fontSize: '.9rem',
	},
};

export default ResultContainer;
