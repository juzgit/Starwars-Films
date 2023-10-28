//import the Link component from the next/link module and the useState hook from the react module.
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchSWfilms } from '../api/api';
import Layout from '../components/Layout';

const Home = () => {
    //
    const [films, setFilms] = useState([]);

    //fetch the Star Wars films from the API when the component mounts.
    useEffect(() => {
        //makes an API call using the fetchSWfilms function and updates the films state variable with the fetched data.
        async function fetchFilms() {
            try{
                const data = await fetchSWfilms('films');
                //if the API response is valid and contains a results property, update the films state variable with the array of films. 
                //otherwise, we log an error message to the console.
                if(data && data.results){
                    setFilms(data.results);
                } else {
                    console.error('Invaid API response:', data);
                }
            } catch (error){
                console.error('Error fetching data:', error);
            }
        }
        //call the fetchFilms function inside the useEffect hook to fetch the films when the component mounts. 
        //the empty dependency array [] ensures that the effect runs only once.
        fetchFilms();
    }, []);

    //check if the films array is empty or falsy. 
    //if it is, return a loading message to indicate that the films are being fetched.
    if(!films || films.length === 0){
        return <div>Loading...</div>
    }

    //render the list of films.
    return(
        <Layout>
            <h1>Star Wars Films</h1>
            <ul className='film-list'>
                {films.map((film, index) => (
                    <li key={index}>
                        {/**will generate a dynamic route for each film based on its index, based on the href attribute */}
                        <Link href={`/films/${index + 1}`}>
                            <p>{film.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
        .film-list {
          list-style: none;
          padding: 0;
        }
        .film-list li {
          margin: 10px 0;
        }
        .film-list li p {
          color: #333;
          text-decoration: none;
          font-weight: bold;
        }
        .film-list li p:hover {
          color: #ff6600;
        }
      `}</style>
        </Layout>
    );
};

export default Home;