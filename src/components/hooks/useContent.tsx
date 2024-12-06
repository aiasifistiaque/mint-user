'use client';

import { useGetStoreQuery } from '@/store/services/storeApi';
import React from 'react';

type Content = {
	content: any;
	basic: any;
	data: any;
};

const useContent = (): Content => {
	const { data, isLoading } = useGetStoreQuery({});

	const [formData, setFormData] = React.useState({
		content: {},
		basic: {},
	});

	React.useEffect(() => {
		if (data) {
			setFormData(data);
		}
	}, [isLoading, data]);

	return {
		content: formData?.content,
		basic: formData?.basic,
		data: formData,
	};
};

export default useContent;
