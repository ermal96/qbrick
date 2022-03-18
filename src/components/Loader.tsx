import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = styled.div`
    border: 4px solid #f3f3f3; 
    border-top: 4px solid #4941eb;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`;

const Loader = () => {
  return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    
  )
}

export default Loader