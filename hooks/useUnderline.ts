import React, { useState, useEffect, useRef } from 'react';

const useUnderline = () => {
	const [textWidth, setTextWidth] = useState(0);
	const elementRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		setTextWidth(elementRef.current.offsetWidth);
	}, []);

	return { elementRef, textWidth };
};

export default useUnderline;
