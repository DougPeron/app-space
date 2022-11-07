import './App.css';
import { apiGetBackend } from './services/apiService';
import Header from './component/Head';
import Main from './component/Main';
import { useEffect, useState } from 'react';
import CardSpace from './component/CardSpace';
import Footer from './component/Footer';
import Pagination from 'react-bootstrap/Pagination';



function App() {
  const pageLimit = 2
  const [itens, setItens] = useState([]);
  const [offset, setOffset] = useState(1);
  const [pag , setPag] = useState (0);
  useEffect(() => {
    apiGetBackend()
      .then((getBackend) => {
        setPag(getBackend.length/pageLimit)
        showCards(getBackend)
      })
      .catch((err) => {
        console.log("erro " + err);
      });
  }, [offset]);

  
  let items = [];
  for (let number = 1; number <= pag; number++) {
  items.push(
    <Pagination.Item id={number} key={number} active={number === offset} onClick={()=> {setOffset(number)}}>
      {number}
    </Pagination.Item>,
  );
}
function showCards( getBackend){
  let cardShow = offset * pageLimit;
  let i = cardShow - pageLimit;
  let listCards = []
  
  for( i ; i < cardShow; i++){
  listCards.push(getBackend[i])
}
return setItens(listCards)
}
  //
  
  return (
    <>
    <Header/>
    <Main>
      {itens.map(({name, country, flickr_images, description, height, diameter, mass})=>{
      return <CardSpace name={name} country={country} flickr_images={flickr_images} description={description} height={height} diameter={diameter} mass={mass}/>
      })}
    </Main>
    <Pagination>{items}</Pagination>
    <Footer/>
    </>
  );
}

export default App;
