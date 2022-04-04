import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const SimpleBarChartDiv = ({ chart }) => {
    return (
        <div className="m-0 md:my-[30px]">

            <h1 className="text-2xl ml-4 uppercase"> revenue vs investment</h1>

            <BarChart className="mt-8"
                width={320}
                height={300}
                data={chart}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>

        </div>
    );
};

export default SimpleBarChartDiv;