import styled from "styled-components";

const SideBar = styled.nav`
  padding: 4rem;
  background-image: linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% );
  @media(max-width: 768px) {
   padding: 1.5rem;
  }
`;
const Title = styled.h1`
  font-size: 2.3rem;
  color: white;
`;
const Subtitle = styled.p`
  color: #4b4747;
  font-size: 1.4rem;
  color: white;
`;

const InfoBox = styled.div`
  border: 1px solid;
  margin-bottom: 3rem;
  display:flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.8rem;
  span {
    &:last-child {
      margin-top: 1rem;
      font-weight: bold;
    }
  }

  &.time {
    border-color: #a3a0f7;
    color: #a3a0f7;
  }
  &.volume {
    border-color: #67ca8d;
    color: #67ca8d;
  }
  &.price {
    border-color: #ffffff;
    color: #ffffff;
  }
 
`;

const Sidebar = ({data, title}: any) => {

  return (
    <SideBar>
      <Title>{title}</Title>
      <Subtitle>AAPL</Subtitle>
      <InfoBox className="time">
          <span>Updated</span>
          <span>{data?.TIME }</span>
      </InfoBox>

      <InfoBox className="price">
          <span>Price</span>
          <span>{ data?.PRICE ?  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(data?.PRICE)) : ""} </span>
      </InfoBox>
    </SideBar>
  )
}

export default Sidebar