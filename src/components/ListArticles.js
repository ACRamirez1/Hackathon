import React from 'react';
import ArticleCard from './ArticleCard';


const ListArticles = (props) => {
    return (
        <div>
            <h1>List Articles</h1>
            {props.articles.map(article => <ArticleCard key={article.id} article={article} />)}
        </div>
    )
}

export default ListArticles;