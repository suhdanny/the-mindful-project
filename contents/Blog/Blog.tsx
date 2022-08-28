import React from 'react';
import Article from '../../components/Article/Article';
import styles from './Blog.module.css';

const Blog = () => {
	return (
		<div className={styles.blog} id='blog'>
			<div className={styles.blogHeading}>
				<h1>learn more about neurodiversity</h1>
			</div>
			<div className={styles.blogContainer}>
				<div className={styles.groupA}>
					<Article date='Aug 9, 2022' title='Article Title' />
				</div>

				<div className={styles.groupB}>
					<Article date='Aug 9, 2022' title='Article Title' />
					<Article date='Aug 9, 2022' title='Article Title' />
					<Article date='Aug 9, 2022' title='Article Title' />
					<Article date='Aug 9, 2022' title='Article Title' />
				</div>
			</div>
		</div>
	);
};

export default Blog;
