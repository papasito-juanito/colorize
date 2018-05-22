import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import styled from 'styled-components';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import NumberFormat from 'react-number-format';

const Div = styled.div`
    width: 100%;
    height: 100%;
    diplay: flex;
    background-color: yellow;
`;

const options = {
    legend: { display: false },
    title: {
        display: true,
        text: '평점~~!~!~!!',
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        xAxes: [{
            gridLines: { display: false },
            ticks: {
                beginAtZero: true,
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
            color: 'white',
            display: true,
            font: {
                weight: 'bold',
            },
            align: 'right',
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
            labels: ['5', '4', '3', '2', '1'],
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
        console.log(this.props.data);
        return (

            <Div>
                <div style={{ width: '100%', height: '100%', display: 'flex' }}>
                    <div style={{ width: '20%', height: '100%', backgroundColor: 'green', textAlign: 'center', padding: '13% 0 0 0' }}>
                        <NumberFormat value={this.props.data ? this.props.data[0].total : 0} displayType={'text'} thousandSeparator={true} prefix={'총 '} suffix={'명'} /><br />
                        <h2> {this.props.data ? (this.props.data[0].avg).toFixed(2) : 0} </h2>
                        <StarRatingComponent
                            name="평점"
                            value={this.props.data ? this.props.data[0].avg : 0}
                        />
                    </div>
                    <div style={{ width: '80%', height: '100%', backgroundColor: 'blue' }}>
                        <HorizontalBar data={data} options={options} />
                    </div>
                    {/* <div style={{ width: '30%', height: '100%', margin:'10% 10% 10% 10%' }}>
            <div>총 {this.props.data ? this.props.data[0].total : 0}명</div>
            <div>
              <StarRatingComponent
                name="평점"
                value={this.props.data ? this.props.data[0].avg : 0}
                    />
            </div>
          </div>
          <div style={{ width: '70%', height: '100%' }}>
            <HorizontalBar data={data} options={options} />
          </div> */}
                </div>
            </Div>
        );
    }

}

export default Chart;



