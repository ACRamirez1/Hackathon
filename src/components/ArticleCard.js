import React from 'react';
import TimeAgo from 'javascript-time-ago'

// Load locale-specific relative date/time formatting rules.
import en from 'javascript-time-ago/locale/en'
import { FormatUnderlined } from '@mui/icons-material';


// Add locale-specific relative date/time formatting rules.
TimeAgo.locale(en)

const timeAgo = new TimeAgo('en-US')





const ArticleCard = (props) => {

    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(246,246,239)',
            margin: '-15px 10px 0 10px',
            // padding: '10px',
            // marginBottom: '-10px',
        }}


            className="card">
            <div className='title' style={{
                display: 'flex',
                alignItems: 'center',
                margin: '-10px 0 0 10px',

            }}>


                <a href={props.article.url} target='_blank' rel="noreferrer" style={{
                    textDecoration: 'none',
                    color: 'black',
                }}>
                    <h3 style={{
                        fontWeight: 'normal',
                    }}>{props.article.title}</h3>
                </a>
                <p style={{
                    display: 'flex',
                    margin: '0 0 0 5px',
                    color: '#696969',
                    textDecoration: 'underline'
                }}>({props.article.url})</p>
            </div>

            <div style={{
                display: 'flex',
                margin: '-35px 0 0 10px',
                fontSize: '14px',
                paddingTop: '4px',
                color: '#696969'
            }}>
                <p>{props.article.points} points | &nbsp;</p> <p>{props.article.author} | &nbsp;</p>
                <p>{timeAgo.format(new Date(props.article.created_at))} | &nbsp;</p>
                <p>{props.article.num_comments} comments</p>
            </div>

        </div>
    )
}

export default ArticleCard;