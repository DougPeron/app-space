import './App.css';
import { apiGetBackend } from './services/apiService';
import Header from './component/Head';
import Main from './component/Main';
import { useEffect, useState } from 'react';
import CardSpace from './component/CardSpace';
import Footer from './component/Footer';

function App() {
  const [itens, setItens] = useState([]);
  useEffect(() => {
    apiGetBackend()
      .then((getBackend) => {
        setItens(getBackend)
      })
      .catch((err) => {
        console.log("erro " + err);
      });
  }, []);
  
  return (
    <>
    <Header/>
    <Main>
    {itens.map(({name, country, flickr_images})=>{
        return <CardSpace name={name} country={country} flickr_images={flickr_images}/>
      })}
    </Main>
    <Footer/>
    </>
  );
}

export default App;
