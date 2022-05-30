//React state chapter 5
import React, {useState, useEffect} from "react";
import './App.css';


function AppUseData({login}) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [theError, setTheError] = useState(null);
	const [isError, setIsError] = useState(false);

	// function setTheError(error) {
	// 	console.log("ERROR=",error);
	// }

	useEffect(()=> {
		if(!login) return;
		setLoading(true);
		setIsError(false);
		fetch(`https://api.github.com/users/${login}`)
// 		fetch(`https://dog.ceo/api/breeds/image/random`)
			// .then(response => {
			// 	if(response.ok) return response.json();
			// 	else return response.json().then(response => {throw new Error(response)})
			// })
			.then(response => response.json())
			.then(setData)
	        .then(setLoading(false)) 
			.catch(error => {
				setIsError(true);
				setTheError(error.message);
				console.error('FOUT:', error.message,"===");
				return error;
		  	})
			//.catch(setTheError);
	},[login]);

	if(loading)		return <h3>Loading...</h3>;
	if(isError)		return <h3>We have an error: {theError}</h3>;
//	if(theError)	return <h3>We have error: {JSON.stringify(theError, null, '\t')}</h3>;
	if(data) {
		// if(data.status==="success") {
		// 	return <div>
		// 		<img height={300} src = {data.message} />
		// 	</div>
		// } else {
		// 	return <h3>Error {data.code}<br/>{data.message}</h3>
		// }
		if(data.message) { //We have an error
			return <h3>Error: <br/>{data.message}<br/><br/>
				doc url:<br/>
				<a href={data.documentation_url}>{data.documentation_url}</a>
			</h3>;
		} else {	//Valid data
			return <div>
				<h1>{data.name}</h1>
				<p>{data.location}</p>
				<img alt={data.login} height={200} src = {data.avatar_url} />
			</div>;
		}
	} else {
		return <h1>No data found</h1>;
	}
}

export default AppUseData;
