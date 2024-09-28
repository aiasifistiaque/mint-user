export { default as useIsMobile } from './useIsMobile';
export * from './useReduxHooks';
export { default as useGetItemNameById } from './useGetItemNameById';
export { default as useAuth } from './useAuth';
export { default as useColors } from './useColors';
export type { ColorProps } from './useColors';
export { default as useFormData } from './useFormData';

// Dependencies: none

// Function: Sorts an array of objects by their 'priority' value in descending order.
// Parameters: doc: any[] - an array of objects to be sorted.
// Returns: An array of objects sorted by their 'priority' value in descending order.
// Example: sortByPriority([{ priority: 1 }, { priority: 2 }, { priority: 0 }]) =>
//          [{ priority: 2 }, { priority: 1 }, { priority: 0 }]

interface MyType {
	priority: number;
}

export const sortByPriority = (doc: []) => {
	return doc.slice().sort((a: MyType, b: MyType) => {
		if (a.priority === undefined) return 1;
		if (b.priority === undefined) return -1;
		return b.priority - a.priority;
	});
};
