import React from 'react';
import { observer } from 'mobx-react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import App from './App';

const Index = () => {
  const { light } = theme;
  const muiTheme = light;
  return (
    <ThemeProvider theme={muiTheme}>
        <App />
    </ThemeProvider>
  );
}

export default observer(Index);

