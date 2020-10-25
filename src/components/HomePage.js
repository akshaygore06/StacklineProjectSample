import React from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Grid, Button, Container } from '@material-ui/core';
import {addProducts} from './../actions/productActions';
import '../styles/home-page.css';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
const sampleData = require('./../../sample_data/Webdev_data2.json');


class HomePage extends React.Component {
  componentDidMount(){
  // fetch all the data here and save it in the redux store. 
    this.props.addProducts(sampleData);
  }

  render(){
    return (
      <div className= "home-container">
        <div className= "header-container">
          <h1>Stackline</h1>
        </div>
        <div>
          <Grid className="main-container" container spacing={3}>
            <Grid style={{backgroundColor: "#f7f7f7"}} item xs={3}> 
              <LeftPanel />
            </Grid>
            <Grid style={{backgroundColor: "#f7f7f7"}} item xs={9}> 
              <RightPanel path={this.props.location.pathname}/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    addProducts: bindActionCreators(addProducts, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


