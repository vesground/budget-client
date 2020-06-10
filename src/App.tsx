import React from 'react';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.scss';

import Routes from 'routes/index';
import store from 'store/index';

const client = new ApolloClient({ uri: process.env.GRAPHQL_API_ENDPOINT_URL });

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
