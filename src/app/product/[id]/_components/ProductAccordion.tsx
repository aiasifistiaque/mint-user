import React, { ReactNode } from 'react';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
} from '@chakra-ui/react';

const ProductAccordion = ({ description }: { description: string }) => {
	return (
		<Accordion>
			<AccordionItem>
				<h2>
					<AccordionButton>
						<AccordionTitle>Description</AccordionTitle>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>{description}</AccordionPanel>
			</AccordionItem>

			<AccordionItem>
				<h2>
					<AccordionButton>
						<AccordionTitle>Section 2 title</AccordionTitle>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem>
				<h2>
					<AccordionButton>
						<AccordionTitle>Specialities</AccordionTitle>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

const AccordionTitle = ({ children }: { children: ReactNode }) => (
	<Box
		fontSize='1.4rem'
		fontWeight='600'
		fontFamily='Playfair Display'
		as='span'
		flex='1'
		textAlign='left'>
		{children}
	</Box>
);

export default ProductAccordion;
