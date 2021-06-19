

const getMoviesFromApiAsync = async () => {
  try {
    let response = await fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue'
      })
    });
    
    let json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};

/*    Fetch API
const getAPI = async() =>{
	
	try {
	let response = await fetch(url,{
		method:"POST",
		header:{}
		body:{}
	})

	let jsonResponse = await response.json()
	return jsonResponse
	}catch(error){
	 console.log(error)
	}
}	
*/