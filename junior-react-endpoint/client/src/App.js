import Navbar from './components/Navbar';
import styled from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import All from './pages/All';
import Clothes from './pages/Clothes';
import Tech from './pages/Tech';
import ProductDesctiptionPage from './pages/ProductDesctiptionPage';
import CartPage from './pages/CartPage';


const StyledBody = styled.div`
  margin: 0 100px;
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id
  }),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
    <Router>
      <StyledBody>
        <Navbar />
        <Routes>
          <Route path='/all/' element={<All />} />
          <Route path='/clothes/' element={<Clothes />} />
          <Route path='/tech/' element={<Tech />} />
          <Route path='/all/:id' element={<ProductDesctiptionPage />} />
          <Route path='/clothes/:id' element={<ProductDesctiptionPage />} />
          <Route path='/tech/:id' element={<ProductDesctiptionPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<Navigate to='/all' />} />
        </Routes>
      </StyledBody>
    </Router>
    </ApolloProvider>
  );
}

export default App;
