import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logo from './logo.svg';
import ArticleCard from './ArticleCard';
import SelectToggle from './SelectToggle'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(7),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '79%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100ch',
    },
  },
}));



export default function PrimarySearchAppBar() {

  const [author, setAuthor] = useState(false)
  // if author is clicked then turns to true. if author is true then fetch result from author fetch
  const [state, setstate] = useState({
      query: '',
      list: []
    })
  const [articles, setArticles] = useState([]);

    useEffect(() => {
      fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
        .then(response => response.json())
        .then(data => setArticles(data.hits));
        
  
    },[])
  
    useEffect(() => {
      console.log('updated', articles);
    },[articles])

    

  const handleChange = (e) => {
    
    setstate({
      query: e.target.value
    })
    console.log(e.target.value, "Author State:", author, "Query:", state.query)

    if(author === true){
    fetch(`https://hn.algolia.com/api/v1/search?tags=story,author_${e.target.value}`)
    .then(response => response.json())
    .then(data => 
      setstate({
      list: data.hits
      }),
      console.log(state.list));
      
    }


      const results = articles.filter(articles => {
        if (e.target.value === "") return articles
        return articles.title.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setstate({
        list: results
        })
      }

      
 

  return (
    <>
    
    <Box sx={{ 
      width: '85%',
     }}>
      <AppBar position="static" style={{
        backgroundColor: 'rgb(255,116,43)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        margin: '0',
      }}>
        <Toolbar style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0',
          margin: '0',
          width: '100%',
        }}>

        <>
            <h4 style={{
                color: 'white',
                padding: '0 5px 0 5px',
                margin: '5px',
                // fontWeight: 'bold',
                fontSize: '30px',
                border: '2px solid white',
                fontFamily: 'Ace Sans',
                
            }}>H</h4>

            <div style={{
                color: 'black',
                fontSize: '18px',
                fontWeight: 'bold',
            }}>Search <br/> Hacker News</div>
            
            </>
         
          <Search style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '50px',

          }}>
            <SearchIconWrapper style={{
              color: 'rgb(255,116,43)',
            }}>
              <SearchIcon />
            </SearchIconWrapper>
           
            <StyledInputBase style={{ color: 'black', width: '100%' }}
              placeholder="Search stories by title, url, or author"
              // how do I add the "search by algolia" into the search bar and also flexed to the end?
              value={state.query} 
              onChange={(e) => handleChange(e)}
              inputProps={{ 'aria-label': 'search' }}
            />

            <div style={{
              color: 'gray',
              fontSize: '15px',
              width: '15%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              
              // padding: '5px',
              
            }}>
              Search by <img src={logo} alt='algolia logo' style={{
                width: '60px',
                // height: '-20px',
                // marginLeft: '10px',
                // marginRight: '10px',
                // borderRadius: '50%',
              }}/>
            </div>

          </Search>

            <SettingsOutlinedIcon style={{
              color: 'black',
              fontsize: 'large',
              marginLeft: '10px',
            }} />

            <div style={{
              color: 'black',
              fontSize: '20px',
              padding: '5px',
            }}>
              Settings
            </div>
          
        </Toolbar>
      </AppBar>
      
     </Box>
     
     <SelectToggle author={author} setAuthor={setAuthor} />
     <ul>
      
        {(state.query === '' ? articles.map(article => <ArticleCard key={article.id} article={article} />
        ) : state.list.map(article => <ArticleCard key={article.id} article={article} />
        ))}
     </ul>
     </>
  );
}