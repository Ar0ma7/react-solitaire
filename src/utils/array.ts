// シャッフルされた配列を返す
export const shuffleArray = <T>(array: T[]): T[] => {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}
	return shuffledArray;
};

// 指定したインデックス以降の要素を取得
export const getArrayFromIndex = <T>(array: T[], index: number): T[] => {
	if (index < 0 || index >= array.length) {
		throw new Error('Index out of bounds');
	}
	return array.slice(index);
};

// 配列と配列に含まれる1つの要素を渡すとインデックスを返す関数
export const getIndexOfElement = <T>(array: T[], element: Partial<T>): number => {
	const index = array.findIndex((item) =>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		Object.keys(element).every((key) => (item as any)[key] === (element as any)[key])
	);

	if (index === -1) {
		throw new Error('Element not found in array');
	}
	return index;
};
