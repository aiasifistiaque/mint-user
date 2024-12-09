'use client';
import { ColRow, FlexChild, SubHeading, Title, PrimaryButton, Column } from '../..';
import React, { FC } from 'react';
import { CategoryCard, CategoryCardContainer } from '.';

type CardItemProps = {
	id: string;
	type: string;
};

const TopContainer: FC<FlexChild> = ({ children }) => (
	<ColRow
		gap={6}
		justify='center'
		align='center'>
		{children}
	</ColRow>
);

type AllCategoriesProps = {
	title: string;
	subTitle: string;
	btnText: string;
	items: CardItemProps[];
};

const AllCategories: FC<AllCategoriesProps> = ({ title, subTitle, btnText, items }) => {
	const renderCategoryCards = items?.map((item: CardItemProps, i: number) => (
		<CategoryCard
			id={item?.id}
			type={item?.type}
			key={i}
		/>
	));
	return (
		<Column>
			<TopContainer>
				<Column
					w='full'
					gap={4}
					textAlign={{ base: 'center', md: 'left' }}>
					<Title type='h4'>{title}</Title>
					<SubHeading>{subTitle}</SubHeading>
				</Column>
				<PrimaryButton px={4}>{btnText}</PrimaryButton>
			</TopContainer>
			<CategoryCardContainer data={items}>{renderCategoryCards}</CategoryCardContainer>
		</Column>
	);
};

export default AllCategories;
