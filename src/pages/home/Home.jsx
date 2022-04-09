import './home.scss'

import { useEffect, useState } from "react";

import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios";

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
  
    useEffect(() => {
      const getRandomLists = async () => {
        try {
          const res = await axios.get(
            `lists${type ? "?type=" + type : ""}${
              genre ? "&genre=" + genre : ""
            }`,
            {
              headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTAzZWNiNmQ2YzZiNDFmMjNmZDk0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTQyOTExOCwiZXhwIjoxNjQ5ODYxMTE4fQ.72XNxHRZOL_kKx75pKSMNvav39tiNHJfro5KBMpcI5w "
              },
            }
          );
          setLists(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getRandomLists();
    }, [type, genre]);

    
    return (
        <div className="home">
            <Navbar/>
          <Featured type={type}/>
          {lists.map((list) => (
            <List  list={list} />
          ))}
        </div>
    )
}

export default Home
