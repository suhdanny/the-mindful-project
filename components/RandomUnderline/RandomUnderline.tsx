import { randomizePath } from '../../utils/randomizePath';
import useUnderline from '../../hooks/useUnderline';

const RandomUnderline = ({ word, color }: { word: string; color: string }) => {
	const { elementRef, textWidth } = useUnderline();

	return (
		<span className='stroke-container'>
			<a ref={elementRef}>{word}</a>
			<svg width={textWidth} height='20' xmlns='http://www.w3.org/2000/svg' className='stroke-svg' style={{ bottom: '-10px' }}>
				<path id='pathItem' d={randomizePath(textWidth)} stroke={color} fill='transparent' strokeWidth='3' strokeLinecap='round' />
			</svg>
		</span>
	);
};

export default RandomUnderline;
