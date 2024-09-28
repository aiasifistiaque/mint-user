type TableObjectProps = {
	padding: {
		bottom: number;
	};
	border: {
		color: {
			light: string;
			dark: string;
		};
		width: number;
		radius: number;
	};
	bg: {
		light: string;
		dark: string;
	};
	stroke: {
		light: string;
		dark: string;
	};
};

const TABLE: TableObjectProps = {
	padding: {
		bottom: 6,
	},
	border: {
		color: {
			light: 'stroke.light',
			dark: 'stroke.dark',
		},
		width: 2,
		radius: 8,
	},
	bg: {
		light: 'table.light',
		dark: 'table.dark',
	},
	stroke: {
		light: 'transparent',
		dark: 'transparent',
	},
};

export default TABLE;
