import React, {Component} from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import styled from 'styled-components';

const Div = styled.div`
    width: 80%;
    height: 80%;
    postiion: relative;
`

const options= {
    legend: { display: false },
    title: {
        display: true,
            text: '평점~~!~!~!!'
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        xAxes: [{ 
            gridLines: { display: false },
            ticks: {
                beginAtZero: true
            },
            display: false
         }],
        yAxes: [{
            display: true,
            gridLines: { display: false }
        }]
    },
    plugins: {
        datalabels: {
            color: 'white',
            display: true,
            font: {
                weight: 'bold'
            },
            align : 'right'
        }
    }
}


class Chart extends Component {
    constructor(){
        super();
        this.state = {
            data : {
            labels: ["5", "4", "3", "2", "1"],
                datasets: [
                    {
                        label: "평점수",
                        backgroundColor: ["#4CAF50", "#2196F3", "#00bcd4", "#ff9800", "#f44336"],
                        data: [306, 300, 288, 403, 502]
                    }
                ]
            }
        }
    }

    render(){
        return (
            <Div>
                <HorizontalBar data = {this.state.data} options={options}/>
            </Div>
        )
    }
    
}

export default Chart;


      