import { ApolloProvider } from '@apollo/client';
import client from './services/graphql/client';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  return (
    <ApolloProvider client={ client }>
      <MainContent />
    </ApolloProvider>
  )
}

export default App
