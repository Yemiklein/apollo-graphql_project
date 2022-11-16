import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import './App.css';
import DisplayData from "./DisplayData";


function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
  return (
  <ApolloProvider client={client}>
      <div className="App">
  <h1>List of Users 🌍</h1>
 <DisplayData />
    </div>
  </ApolloProvider>
  );
}

export default App;
