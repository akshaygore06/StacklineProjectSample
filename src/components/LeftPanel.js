import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Divider, Grid, Button, Container } from '@material-ui/core';
import '../styles/left-panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faHome } from '@fortawesome/free-solid-svg-icons'
const sampleData = require('./../../sample_data/Webdev_data2.json');

const getTag = (tag) =>  {
    return(
        <div className="tag-container">
            <h4 className="tag">{tag}</h4>
        </div>
    );
}

const LeftPanel = () => {

    const activeStyle = { color: '#5a6477' };
    const inactiveStyle = { color: '#abbbce' };
  return (
    <Container className= "left-panel-container">
        <div className= "image-container">
            <img  className="image" src={`${sampleData[0].image}`} />
            <div className= "title-container">
            <h1 className="title">{`${sampleData[0].title}`}</h1>
            <h4 className="subtitle-text" >{`${sampleData[0].subtitle}`}</h4>
            </div>
        </div>
        <div className="tags-main-container">
        {sampleData[0].tags.map(tag => {
            return getTag(tag);
        })}
        </div>
        
        <div className="nav-container">
            {/* Need to change the link to redirect the Overview Page */}
            <div className="nav-inner-container">
            <FontAwesomeIcon icon={faHome}  className="nav-icon" /> <NavLink className="nav-link" exact to="/" activeStyle={activeStyle}>OVERVIEW</NavLink>
            </div>
            <div className="nav-inner-container">
                <FontAwesomeIcon icon={faChartBar}  className="nav-icon" /> <NavLink className="nav-link" exact to="/sales" activeStyle={activeStyle}>SALES</NavLink>
            </div>
        </div>
      
    </Container>
  );
};

export default LeftPanel;
