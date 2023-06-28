const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=t", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));