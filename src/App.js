// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import Header from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import withListLoading from './components/withloading';
console.log("hello", process.env.REACT_APP_API_KEY)
function App() {
const ListLoading= withListLoading(Main)
const [appState, setAppState]= useState({
  loading:false,
  data:null
});
useEffect(() => {
  setAppState({loading:true});
  const key=process.env.REACT_APP_API_KEY
  const apiUrl="http://api.openweathermap.org/data/2.5/forecast?q=delhi,iN&appid="+key+"&cnt=5&units=metric";
  fetch(apiUrl)
  .then((res) =>res.json())
  .then((data) =>{
    setAppState({
      loading:false,
      data:data
    })
  })
},[setAppState]);
return(
  <div className='App'>
  <Header />
      <ListLoading isLoading={appState.loading} data={appState.data} />
      <Footer />
    </div>
)
}
export default App;
