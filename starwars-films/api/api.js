//export the function
export async function fetchSWfilms (endpoint){
    //fetch data from the SWAPI endpoin
    const response = await fetch(`https://swapi.dev/api/${endpoint}`);
    //convert the response to JSON format
    const data = await response.json();
    //return the data
    return data; 
}