import { ApolloProvider } from '@apollo/client';
import client from './services/graphql/client';
import MainContent from './components/MainContent/MainContent';
import CookiePopup from './components/CookiePopup/CookiePopup';

const Home = () => {
    return <CookiePopup />;
};

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Home />
            <MainContent />
        </ApolloProvider>
    );
};

export default App;
