import React from 'react';
import Article from '../../components/Article/Article';
import styles from './Blog.module.css';
import Fade from 'react-reveal/Fade';

const Blog = () => {
	return (
		<div className={styles.blog} id='blog'>
			<div className={styles.blogHeading}>
				<h1>learn more about neurodiversity</h1>
			</div>
			<div className={styles.blogContainer}>
				<Fade>
					<div className={styles.groupA}>
						<Article date='Aug 9, 2022' title='Article Title' />
					</div>
				</Fade>
				<Fade>
					<div className={styles.groupB}>
						<Article date='Aug 9, 2022' title='Article Title' />
						<Article date='Aug 9, 2022' title='Article Title' />
						<Article date='Aug 9, 2022' title='Article Title' />
						<Article date='Aug 9, 2022' title='Article Title' />
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Blog;
