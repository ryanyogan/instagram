import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from '../../graphql';

const WithProvider = WrappedComponent =>
  class C extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };

export default WithProvider;
