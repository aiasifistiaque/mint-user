import { useColorModeValue } from '@chakra-ui/react';

const useColors = () => {
	const bg = useColorModeValue('white', '#202020');
	const dark = useColorModeValue('#fafafa', 'black');

	return {
		colors: { bg, dark },
	};
};

export default useColors;
