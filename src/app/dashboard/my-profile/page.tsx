'use client';
import { ProfileCard, Section } from '@/components';
import React from 'react';

const DashPage = () => {
	return (
		<Section p={{ base: 4, md: 6 }}>
			<ProfileCard />
		</Section>
	);
};

export default DashPage;
