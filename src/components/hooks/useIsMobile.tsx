import { useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';

const useIsMobile: FC = (): boolean => {
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

	const isMobile = isLargerThan800 ? false : true;

	return isMobile;
};

export default useIsMobile;
