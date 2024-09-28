import Handler from './handler.type';

const handleString = ({ e, formData, setFormData, setChangedData }: Handler) => {
	console.log(e.target.name);
	if (e.target.name.includes('.')) {
		const [parent, child] = e.target.name.split('.');
		setFormData((prevState: any) => ({
			...prevState,
			[parent]: {
				...prevState[parent],
				[child]: e.target.value,
			},
		}));
		setChangedData((prevState: any) => ({
			...prevState,
			[parent]: {
				...formData[parent],
				[child]: e.target.value,
			},
		}));
	} else {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setChangedData((prevState: any) => ({ ...prevState, [e.target.name]: e.target.value }));
	}
};

export default handleString;
