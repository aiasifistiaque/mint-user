type CreateType = {
	schema: any;
	layout: any;
	type?: 'post' | 'update';
};

const createType = ({ type, isReadOnly, fieldType }: any) => {
	if (type == 'update' && isReadOnly) {
		return 'read-only';
	}
	return fieldType;
};

const createFormFields = ({ schema, layout, type = 'post' }: CreateType): any[] => {
	const dataFields: any[] = [];

	layout.forEach((section: any) => {
		const { sectionTitle, fields } = section;

		fields.forEach((field: any, index: number) => {
			const lastElement = index === fields.length - 1;
			const firstIndex = index === 0;

			if (Array.isArray(field)) {
				field.forEach((subField: any, subIndex: number) => {
					const fieldConfig = schema[subField];
					const lastSubIndex = subIndex === field.length - 1;
					const typeDetail = createType({
						type: type,
						isReadOnly: fieldConfig?.readOnlyOnUpdate || false,
						fieldType: fieldConfig.type,
					});
					if (fieldConfig) {
						dataFields.push({
							...(firstIndex && { sectionTitle: sectionTitle }),
							name: subField,
							label: fieldConfig.label || fieldConfig.title,
							isRequired: fieldConfig.isRequired || fieldConfig.required || false,
							type: typeDetail,
							...(fieldConfig.placeholder && { placeholder: fieldConfig.placeholder }),
							...(fieldConfig.options && { options: fieldConfig.options }),
							...(fieldConfig.model && { model: fieldConfig.model }),
							...(fieldConfig.dataModel && { dataModel: fieldConfig.model }),
							...(fieldConfig.options && { dataModel: fieldConfig.options }),
							span: 1,
							endOfSection: lastElement && lastSubIndex,
						});
					}
				});
			} else {
				const fieldConfig = schema[field];
				const typeDetail = createType({
					type: type,
					isReadOnly: fieldConfig?.readOnlyOnUpdate || false,
					fieldType: fieldConfig.type,
				});
				if (fieldConfig) {
					dataFields.push({
						...(firstIndex && { sectionTitle: sectionTitle }),
						name: field,
						label: fieldConfig.label || fieldConfig.title,
						isRequired: fieldConfig.isRequired || fieldConfig.required || false,
						type: typeDetail,
						...(fieldConfig.placeholder && { placeholder: fieldConfig.placeholder }),
						...(fieldConfig.options && { options: fieldConfig.options }),
						...(fieldConfig.model && { model: fieldConfig.model }),
						...(fieldConfig.dataModel && { dataModel: fieldConfig.dataModel }),
						...(fieldConfig.options && { dataModel: fieldConfig.options }),
						endOfSection: lastElement,
					});
				}
			}
		});
	});

	return dataFields;
};

export default createFormFields;
