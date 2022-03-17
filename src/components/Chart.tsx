import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";

const ChartWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    min-height: 100vh;
`;

const CustomToolTip = styled.div`
  background-color:  #ffffff;
  box-shadow: 0px 0px 10px #dfdbdb;
  border-radius: 8px;
  padding: 5px 15px;
`;

const CustomToolTipItem = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

type ChartData = {
  PRICE: number,
  TIME: string,
  VOLUME: number
}

const Chart = ({stocks}: any) => {
  const data: ChartData[] = [];

  if(stocks) {
    stocks.forEach((item: {
      p: number,
      t: number,
      v: number
    }) => {
      data.push({
        PRICE: item.p,
        TIME: new Date(item.t).toISOString().split("T")[1].split(".")[0],
        VOLUME: item.v
      })
    })
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <CustomToolTip>
          <CustomToolTipItem>{`Time: ${label}`}</CustomToolTipItem>
          <CustomToolTipItem style={{color: "#4941eb"}}>{`Price : ${payload[0].value}`}</CustomToolTipItem>
          <CustomToolTipItem style={{color: "#67ca8d"}}>{`Volume: ${payload[1].value}`}</CustomToolTipItem>
        </CustomToolTip>
      );
    }
  
    return null;
  };
  

  return (
      <ChartWrapper>
        <div></div>
       <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            bottom: 30,
            left: 50,
            right: 50,
            top: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="TIME" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="PRICE" stroke="#4941eb" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="VOLUME" stroke="#67ca8d" />
        </LineChart>
      </ResponsiveContainer>
      </ChartWrapper>
   
  )
}

export default Chart