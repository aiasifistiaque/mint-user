import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useColors } from "@/components";

const ProductAccordion = ({ description }: { description: string }) => {
  const colors = useColors();
  return (
    <Accordion defaultIndex={[0]} allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton color={colors?.primaryText}>
            <AccordionTitle>Description</AccordionTitle>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color={colors?.secondaryText}>
          {description}
        </AccordionPanel>
      </AccordionItem>

      {/* <AccordionItem>
				<h2>
					<AccordionButton color={colors?.primaryText}>
						<AccordionTitle>Section 2 title</AccordionTitle>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel
					pb={4}
					color={colors?.secondaryText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem>
				<h2>
					<AccordionButton color={colors?.primaryText}>
						<AccordionTitle>Specialities</AccordionTitle>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel
					pb={4}
					color={colors?.secondaryText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
			</AccordionItem> */}
    </Accordion>
  );
};

const AccordionTitle = ({ children }: { children: ReactNode }) => (
  <Box
    fontSize="1.4rem"
    fontWeight="600"
    fontFamily="Playfair Display"
    as="span"
    flex="1"
    textAlign="left"
  >
    {children}
  </Box>
);

export default ProductAccordion;
