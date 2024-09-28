'use client';
import { Section } from '@/components';
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import UpdatePasswordCard from '@/components/dashboard/profile-card/UpdatePasswordCard';

const DashPage = () => {
	return (
		<Section p={{ base: 4, md: 6 }}>
			<UpdatePasswordCard />
		</Section>
	);
};

export default DashPage;
