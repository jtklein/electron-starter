import { app, ipcMain } from 'electron';

import * as ipc from '../constants/ipc';

function send(event, channel, data) {
  if (!data.error) {
    return event.sender.send(channel, data);
  }
  return event.sender.send(
    channel,
    Object.assign({}, data, { error: serializeError(data.error) })
  );
}

// Init the app state with some relevant information
ipcMain.on(ipc.INIT_APP_STATE, (event) => {
  const version = app.getVersion();
  send(event, ipc.INIT_APP_STATE_RECEIVED, {
    version,
  });
});
