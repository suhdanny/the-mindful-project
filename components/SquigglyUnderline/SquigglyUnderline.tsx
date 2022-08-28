import useUnderline from '../../hooks/useUnderline';
import { motion } from 'framer-motion';

const pathVariants = {
	initial: { opacity: 0, pathLength: 0 },
	animate: { opacity: 1, pathLength: 1, transition: { delay: 0.3, duration: 1, ease: 'easeInOut' } },
};

const SquigglyUnderline = ({ word, color }: { word: string; color: string }) => {
	const { elementRef, textWidth } = useUnderline();

	return (
		<span className='stroke-container'>
			<a ref={elementRef}>{word}</a>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				height='20'
				width={textWidth}
				className='stroke-svg'
				style={{ bottom: '-15px' }}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}>
				<motion.path
					strokeLinecap='round'
					strokeWidth='2'
					d='M1 2l4.935 1.763c1.261.45 2.669.133 3.615-.813v0a3.464 3.464 0 014.9 0l.8.8a4.596 4.596 0 006.5 0v0a4.596 4.596 0 016.5 0l.75.75a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0l.285-.285a3.938 3.938 0 014.872-.555l1.988 1.243A6.885 6.885 0 0098 5.157l2.454-1.291a11.712 11.712 0 017.49-1.17l4.555.804'
					stroke={color}
					fill='transparent'
					variants={pathVariants}
				/>
			</motion.svg>
		</span>
	);
};

export default SquigglyUnderline;
