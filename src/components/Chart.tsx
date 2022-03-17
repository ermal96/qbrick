import { LineChart, Line, YAxis, CartesianGrid, Tooltip } from 'recharts';
import styled from "styled-components";

const ChartWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export type ChartProps = {
    data: {
        APPL: number,
    }[]
}

const Chart = ({data} : ChartProps) => {
  return (
      <ChartWrapper>
        <LineChart 
            width={900} 
            height={400} 
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="BTCUSDT" stroke="#8884d8" />
            <Line type="monotone" dataKey="APPL" stroke="#82ca9d" />
        </LineChart>
      </ChartWrapper>
   
  )
}

export default Chart