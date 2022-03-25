import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
import { StcokData, TooltipProps } from '../types';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30rem 4fr;
  grid-gap: 3rem;
  height: 50vh;
}
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


type Chartprops = {
  stocks: any,
  title: string
}

const Chart = ({stocks, title}: Chartprops) => {
  const data: StcokData[] = [];

  if(stocks) {
    stocks.forEach((item: {
      p: number,
      t: number,
    }) => {
      data.push({
        PRICE: item.p,
        TIME: new Date(item.t).toISOString().split("T")[1].split(".")[0],
      })
    })
  }


  const CustomTooltip = ({ active, payload, label }: TooltipProps ) => {
    if (active && payload && payload.length) {
      return (
        <CustomToolTip>
          <CustomToolTipItem>{`Updated: ${label}`}</CustomToolTipItem>
          <CustomToolTipItem style={{color: "#4941eb"}}>{`Price : ${ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(payload[0].value)) }`}</CustomToolTipItem>
        </CustomToolTip>
      );
    }
    return null;
  };
  

  return (
      <Wrapper>
        <Sidebar data={data[data.length - 1]} title={title} />
        <ResponsiveContainer height="100%">
              <LineChart
                width={1000}
                height={550}
                data={data}
                margin={{
                  bottom: 100,
                  left: 0,
                  right: 60,
                  top: 50
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="TIME" />
                <YAxis />
                <Tooltip content={<CustomTooltip  />} />
                <Line type="monotone" dataKey="PRICE" stroke="#4941eb" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
      </Wrapper>
   
  )
}

export default Chart