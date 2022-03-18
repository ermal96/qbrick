import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AAPL_STOCK, WS_URL } from "./api/ws";
import Chart from "./components/Chart";
import Loader from "./components/Loader";
import { selectStockState } from "./store/selectors/stockSelector";
import { stockActions } from "./store/slices/stockSlice";

const App = () => {
  const dispatch = useDispatch();
  const stockState = useSelector(selectStockState);

  const ws = useMemo(() => new WebSocket(WS_URL), []);

  ws.onopen = () => {
    ws.send(AAPL_STOCK);
    dispatch(stockActions.connectionEstablished())
    console.log("connected");
  };

  const connect = useCallback(() => {
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        if ((json.event = "data")) {
          dispatch(stockActions.receiveMessage(json.data))
        }
      } catch (error) {
        console.log(error);
      }
    }
    ws.onclose = function() {
      console.log('Socket is closed. Reconnect will be attempted in 1 second.');
      setTimeout(function() {
        connect();
      }, 1000);
    };
    
    ws.onerror = function() {
      console.error('Socket encountered error: Closing socket');
      ws.close();
    };
  }, [dispatch, ws])

  
useEffect(() => {
  connect()
}, [connect])


if(!stockState.messages.length) {
  return <Loader />
}
  return (
    <Chart stocks={stockState.messages} />
  );
}

export default App;
