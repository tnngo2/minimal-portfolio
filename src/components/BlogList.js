import React from 'react'
import styles from './BlogList.module.css'


const BlogList = props => {
  const { articles } = props;

  return (
    <div className={styles.index}>
      <h5 className={styles.heading}>Recent notes</h5>
      <div className={styles.articles}>
        <ol>
          {articles.map((article, index) => (
              <li className={styles.article}>
                <a href={article.url}>{article.title}</a>
                <span> - {article.date}</span>
              </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BlogList
