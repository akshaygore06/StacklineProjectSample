import React from 'react';
import {Container } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import '../styles/sales-table.css';
import { connect } from 'react-redux';

const columns = [
    { field: 'weekEnding', headerName: 'Week Ending', width: 170},
    { field: 'retailSales', headerName: 'Retail Sales', width: 170,},
    { field: 'wholesaleSales', headerName: 'Wholesale Sales', width: 170},
    { field: 'unitsSold', headerName: 'Units Sold', width: 170},
    { field: 'retailerMargin', headerName: 'Retailer Margin', width: 170},
  ];

class SalesTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            products: {},
            rows : [],
            columns:columns
        }
    }

    updateTable = (products) => {
        let formattedRows = [];

        //By default using 1st element to show
        // console.log("props.products :" + JSON.stringify(products));
        formattedRows = products[0].sales.map((entry, index)=>{
            return {id:index, ...entry};
        });

        this.setState({
            rows: formattedRows,
            products: products
        });
    }

    shouldComponentUpdate(nextProps) {
        if(this.state.products != nextProps.products ) {
            this.updateTable(nextProps.products);
            return true;
        }
    }

    render() {
        return (
            <Container className= "sales-table-container">
            <DataGrid rows={this.state.rows} columns={columns} />
            </Container>
        );
    };

  
};

const mapStateToProps = (state) => {
    return {
      products: state.productReducer.products
    };
}

export default connect(mapStateToProps,null)(SalesTable);
