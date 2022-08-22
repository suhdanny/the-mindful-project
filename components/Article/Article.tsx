import React from 'react';
import styles from './Article.module.css';

type ArticleProps = {
	imgURL: string;
	date: string;
	title: string;
};

const Article = ({ imgURL, date, title }: ArticleProps) => {
	return (
		<div className={styles.article}>
			<div className={styles.articleImage}>
				<img src='/images/news.jpeg' alt='blog image' />
			</div>
			<div className={styles.articleContent}>
				<div>
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<p>Read Full Article</p>
			</div>
		</div>
	);
};

export default Article;
