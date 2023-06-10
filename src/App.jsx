import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import axios from 'axios';
import Table from './Table';
import Prices from './Prices';
import { FadeLoader } from 'react-spinners';


function App() {
  
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState();
  console.log(data);
  
  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setData(null);
    const data = await axios.post("https://price-iota.vercel.app", {
      source: source,
      destination: destination,
      date: date
    }).then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }

  return (
    <>
      <h1 className='heading mt-3'>FLIGHT PRICE API</h1>
      <Form onSubmit={onSubmit} setSource={setSource} setDestination={setDestination} setDate={setDate} />
      <div className='mx-5'>
        {data && Object?.keys(data)?.map((key, index) => (
          <Prices keys={key} index={index} data={data} />
        ))}
        {data === null ? <FadeLoader color='black' size={15} />:''}
      </div>
    </>
  )
}

export default App
