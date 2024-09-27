import { useColorModeValue } from '@chakra-ui/react';

export type ColorProps = {
	bg: string;
	dark: string;
	headerBg: string;
	border: string;
	darkBg: string;
};

const useColors = (): ColorProps => {
	const bg = useColorModeValue('white', '#202020');
	const dark = useColorModeValue('#fafafa', 'black');

	const headerBg = useColorModeValue('white', 'eblack.200');
	const border = useColorModeValue('eborder.600', 'eborder.600');
	const darkBg = useColorModeValue('#202020', 'black');

	return {
		bg,
		dark,
		headerBg,
		border,
		darkBg,
	};
};

export default useColors;
