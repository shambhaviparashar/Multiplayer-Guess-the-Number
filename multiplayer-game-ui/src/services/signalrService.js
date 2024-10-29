import * as signalR from '@microsoft/signalr';

const connectToSignalR = (onMessageReceived) => {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_BACKEND_URL}/gamehub`)
    .build();

  connection.on('ReceiveGameUpdate', onMessageReceived);

  connection.start().catch((err) => console.error('Error establishing SignalR connection:', err));
};

export default connectToSignalR;