import React, { useState } from 'react';
import styles from './Article.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

type ArticleProps = {
	imgURL?: string;
	date: string;
	title: string;
};

const Article = ({ imgURL, date, title }: ArticleProps) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div className={styles.article} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			<div className={styles.articleImage}>
				<img src='/images/news.jpeg' alt='blog image' />
			</div>
			<div className={styles.articleContent}>
				<div>
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<div className={styles.readArticleContent}>
					<p>Read Full Article</p>
					<span>{hovered && <FaLongArrowAltRight size={12} style={{ marginLeft: '0.1rem', color: 'hsl(230deg, 100%, 69%)' }} />}</span>
				</div>
			</div>
		</div>
	);
};

export default Article;
