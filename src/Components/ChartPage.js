import React from "react";
import { useSelector } from "react-redux";
import { ComposedChart ,Line , Bar , XAxis,YAxis, Tooltip, Legend , CartesianGrid, ResponsiveContainer} from 'recharts';
import { useNavigate } from "react-router-dom";

const ChartPage = () =>{
    const { data , meta} = useSelector((state)=>state.data)
    const navigate = useNavigate()

    const MetaLineChart = meta.find((item)=> item.chartType.toLowerCase()==='line')
    const MetaBarChart = meta.find((item)=> item.chartType.toLowerCase()==='bar')

    const handleClick = ()=>{
        navigate('/table');
    }

    return(
        <div>
            <h1> Chart Page</h1>
            <ResponsiveContainer height={400}>
            <ComposedChart data={data}>
            <XAxis dataKey="date"/>
            {
                MetaLineChart && (
                    <YAxis yAxisId={MetaLineChart.axis}
                    orientation="left"
                    stroke={MetaLineChart.color}
                    />
                )
            }

            {
                MetaBarChart && (
                    <YAxis yAxisId={MetaBarChart.axis}
                    orientation="right"
                    stroke={MetaBarChart.color}
                    />
                )
            }
            < CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Tooltip />
            <Legend />
            {
                MetaLineChart && (
                    <Line type="monotone" yAxisId={MetaLineChart.axis} dataKey={MetaLineChart.field} stroke={MetaLineChart.color}/>
                )
            }
            {
                MetaBarChart && (
                    <Bar yAxisId={MetaBarChart.axis} dataKey={MetaBarChart.field} fill={MetaBarChart.color}/>
                )
            }
            </ComposedChart>
            </ResponsiveContainer>
            <button onClick={handleClick}>See Table </button>
        </div>
    );

};

export default ChartPage;