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
            data : [
                    // this.props.data[4], 
                    // this.props.data[3],
                    // this.props.data[2],
                    // this.props.data[1],
                    // this.props.data[0]  
            ]
        }
        
    }
    
    // componentWillReceiveProps(newProps){
    //     console.log(newProps.data[0]);
    // }
    

    // componentDidMount() {
    //     axios.get(`http://127.0.0.1:8080/api/item/detail?color_id=${this.props.match.params.id}`)
    //         .then((response) => {
    //             console.log(response.data);
    //           })
    //         // .then(response => this.setState({ data: response.data }))
    //         .catch(err => console.log(err))
    // }    

    render(){
    
        var data = {
            labels: ["5", "4", "3", "2", "1"],
            datasets: [
                {
                    label: "평점수",
                    backgroundColor: ["#4CAF50", "#2196F3", "#00bcd4", "#ff9800", "#f44336"],
                    data: [ 1, 2, 3, 4, 5
                        // this.props.data[4],
                        // this.props.data[3],
                        // this.props.data[2],
                        // this.props.data[1],
                        // this.props.data[0]
                        // this.props.data ? this.props.data[4] : null,
                        // this.props.data ? this.props.data[3] : null, 
                        // this.props.data ? this.props.data[2] : null, 
                        // this.props.data ? this.props.data[1] : null, 
                        // this.props.data ? this.props.data[0] : null
                    ]
                }
            ]
        }
        
        console.log(this.props.data ? this.props.data[0].total : null)


        return (
            <Div>
                <HorizontalBar data = {data} options={options}/>
            </Div>
        )
    }
    
}

export default Chart;


      