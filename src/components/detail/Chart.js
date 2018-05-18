import React, {Component} from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import styled from 'styled-components';
import axios from 'axios';

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
    constructor(props){
        super(props);
        this.state = {
        }
        
    }

    render(){
        const data =  {
            labels: ["5", "4", "3", "2", "1"],
            datasets: [
                    {
                        label: "평점수",
                        backgroundColor: ["#4CAF50", "#2196F3", "#00bcd4", "#ff9800", "#f44336"],
                        data: [
                            this.props.data ? this.props.data[0].sssss : null,
                            this.props.data ? this.props.data[0].ssss : null,
                            this.props.data ? this.props.data[0].sss : null,
                            this.props.data ? this.props.data[0].ss : null,
                            this.props.data ? this.props.data[0].s : null,
                        ]
                     }
            ]
        }
        
        return (
            <Div>
                <HorizontalBar data = {data} options={options}/>
            </Div>
        )
    }
    
}

export default Chart;


      