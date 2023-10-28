import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
//import the fetchSWfilms function from the api module.
import { fetchSWfilms } from '../../api/api';
import Layout from '../../components/Layout';

export default function filmDetails(){
    //router object from Next.js using the useRouter hook
    const router = useRouter();
    //extracts the id parameter from the router query
    const { id } = router.query;
    //state variable to store the film details
    const [film, setFilm] = useState(null);

    //fetch the film details when the component mounts
    useEffect(() => {
        async function details(){
            //check if the id parameter is available
            if(id){
                //fetch the film details using the fetchSWfilms function from the API
                const data = await fetchSWfilms(`films/${id}`);
                //update the film state variable with the fetched data
                setFilm(data);
            }
        }
        //call the details function
        details();
    }, []);

    //if the film details are not available yet, display a loading message
    if(!film){
        return <div>Loading...</div>
    }

    //render the film details
    return(
        <Layout >
            {film ? (
                <div className='film-details'>
                    <h1>{film.title}</h1>
                    <p>Director: {film.director}</p>
                    <p>Producer: {film.producer}</p>
                    <p>Release: {film.release_date}</p>
                </div>
            ): (
                <div>Loading...</div>
            )}

    <style jsx>{`
        .film-details {
          margin-top: 20px;
        }
      `}</style>

        </Layout>
    );
};
