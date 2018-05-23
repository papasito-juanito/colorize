import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import styled from 'styled-components';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import NumberFormat from 'react-number-format';
import '../../../node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js';

const Wrapper = styled.div`
     width: 100%;
     height: 100% 
     display: flex;
     border : 1px solid #d9dee8;
     background-color:white;
`
const RatingDiv = styled.div`
    width: 25%;
    height: 100%;
    text-align: center;
    padding: 22% 0 0 0 ;
    box-sizing: border-box; 
`
const ChartDiv = styled.div`
    width: 65%; 
    height: 100%;
    padding: 9% 0 0 0;
    box-sizing: border-box; 
`

const options = {
    legend: { display: false },
    title: {
        display: true,
        text: '사용자 평점',
        fontSize: 15,
        fontFamily: 'sans-serif'
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        xAxes: [{
            gridLines: { display: false },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 50,
                stepSize: 2
            },
            display: false,
        }],
        yAxes: [{
            display: true,
            gridLines: { display: false },
        }],
    },
    plugins: {
        datalabels: {
            display: true,
            color: 'black',
            anchor: 'end',
            align: 'right'
        },
        
    
    },
};


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {

        const data = {
            labels: ['5점', '4점', '3점', '2점', '1점'],
            datasets: [
                {
                    label: '평점수',
                    backgroundColor: ['#4CAF50', '#2196F3', '#00bcd4', '#ff9800', '#f44336'],
                    data: [
                        this.props.data ? this.props.data[0].sssss : null,
                        this.props.data ? this.props.data[0].ssss : null,
                        this.props.data ? this.props.data[0].sss : null,
                        this.props.data ? this.props.data[0].ss : null,
                        this.props.data ? this.props.data[0].s : null,
                    ],
                },
            ],
        };

        return (

                <Wrapper>
                    <RatingDiv>
                        <NumberFormat value={this.props.data ? this.props.data[0].total : 0} displayType={'text'} thousandSeparator={true} prefix={'총 '} suffix={'명'} /><br />
                        <h2> {this.props.data ? (this.props.data[0].avg).toFixed(2) : 0} </h2>
                        <StarRatingComponent
                            name="평점"
                            value={this.props.data ? this.props.data[0].avg : 0}
                        />
                    </RatingDiv>
                    <ChartDiv>
                        <HorizontalBar height={250} data={data} options={options} />
                    </ChartDiv>
                </Wrapper>

        );
    }

}

export default Chart;



