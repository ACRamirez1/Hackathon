import React from 'react';
import ArticleCard from './ArticleCard';


const ListArticles = (props) => {
    return (
        <div style={{
            backgroundColor: 'rgb(246,246,239)',
            height: '100%',
            width: '85%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '25px 0 15px 0'
        }}>
            

            
            {props.articles.map(article => <ArticleCard key={article.id} article={article} />)}
        </div>
    )
}

export default ListArticles;