export const randomizePath = (length: number) => {
	const moveYMin = 5;
	const moveYMax = 12;
	const curveXMin = 20;
	const curveXMax = length;
	const curveYMin = 5;
	const curveYMax = 20;
	const endYMin = 5;
	const endYMax = 10;
	const moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
	const curveX = Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
	const curveY = Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
	const endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

	const newPath = `M5 ${moveY} Q ${curveX} ${curveY} ${length - 7} ${endY}`;

	return newPath;
};
