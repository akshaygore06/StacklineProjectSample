import React from 'react';
import { Container } from '@material-ui/core';
import '../styles/right-panel.css';
import {connect} from 'react-redux';
import SalesGraph from './SalesGraph';
import SalesTable from './SalesTable';

class RightPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            products: props.products
        };
    }
    componentWillReceiveProps(nextProps){
        if(this.props.products != nextProps.products) {
            this.setState({
                products: nextProps.products
            });
        }
    }
    
    render() {
        const showSale = true; //props.path === "/sales";
        return(
            <Container className= "right-panel-container">
                {showSale && <SalesGraph />}
                {showSale && <SalesTable />}
                {!showSale && <h1>Loading</h1>}
            </Container>
        );
    };
  
};

const mapStateToProps = (state) => {
    return {
      products: state.productReducer.products
    };
}

export default connect(mapStateToProps,null)(RightPanel);
