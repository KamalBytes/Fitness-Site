export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a689474790mshc4f236e7a82b17dp1020d1jsn597d4cd214ed',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  }