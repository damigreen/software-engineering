import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';


const ArticleList = ({ articles }) => {

  return(
    <div className={articleStyles.grid}>  
      {articles.map(article => (
        // <h3>{article.title} </h3>
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList;
