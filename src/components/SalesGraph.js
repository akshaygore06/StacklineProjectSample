import React from 'react';
import { Container } from '@material-ui/core';
import '../styles/sales-graph.css';
import Chart from "chart.js";
import {connect} from 'react-redux';


class SalesGraph extends React.Component {
    constructor(props){
        super(props);
        this.chartRef = React.createRef();
        this.state = {
            product: !! props.product && props.product[0] || {}
        }
    }

    generateChart = (product) => {
        let dataset1 = {}

        dataset1 = Object.keys(product).length !== 0  && Object.keys(product.sales).length !== 0 && product.sales.map( entry => {
            return {
                x: entry.weekEnding,
                y: entry.retailSales
            }

        });
        let dataset2 ={};
         dataset2 = Object.keys(product).length !== 0  && Object.keys(product.sales).length !== 0 && product.sales.map( entry => {
            return {
                x: entry.weekEnding,
                y: entry.wholesaleSales
            
            }

        });

        const datasetLabels = Object.keys(product).length !== 0  && Object.keys(product.sales).length !== 0 && product.sales.map( entry => {
            return entry.weekEnding;
        });

        const myChartRef = this.chartRef.current.getContext("2d");
       new Chart(myChartRef, {
            type: "line",
            data: {
                labels: datasetLabels,
                datasets: [
                    {
                        label: "Sales 1",
                    data: dataset1,
                        fill: false,
                        borderColor: "#43a7f6"
                    },
                    {
                        label: "Retailer Margin",
                    data: dataset2,
                        fill: false,
                        borderColor: "#a0abc3"
                    },
                ]
            },
            options: {
                legend: {
                    display: false
                 },
                elements: {
                    point:{
                        radius: 0
                    }
                },
                scales: {
                    xAxes: [{
                      display: true,
                      gridLines: {
                        display: false,
                        drawBorder: true,
                        
                      },
                      type: 'time',
                      distribution: 'linear',
                      time: {
                        displayFormats: {'month': 'MMM'},
                        unit: 'month',
                       },
                    scaleLabel: {
                        display:     false,
                    },
                      
                    }],
                    yAxes: [{
                      display: false,
                      gridLines: {
                        drawBorder: false,
                      },
                      ticks: {
                        beginAtZero: true,
                        stepSize: 500000,
                        min: -2500000,
                        max: 2500000,
                    }
                    }],
                  },
            }
        });
    }


    componentDidMount() {
        this.generateChart(this.state.product);
    }

    shouldComponentUpdate(nextProps) {
        //By default using 1st element to show
        if(!!nextProps.products && this.state.product != nextProps.products[0]){
            this.setState({
                product: nextProps.products[0]
            });
            this.generateChart(nextProps.products[0]);
            return true;
        }
    }

    render(){
        return (
            <Container className= "sales-panel-container">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </Container>
          );
    }
  
}

const mapStateToProps = (state) => {
    return {
      products: state.productReducer.products
    };
}

export default connect(mapStateToProps, null)(SalesGraph);