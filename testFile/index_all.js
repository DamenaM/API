
// const UrlMain = 'http://hemis.ethernet.edu.et/backend/StudentGraduate/GetStudentGraduatesByInstitution/202122/AASTU';
// const requestOptions = {
//   method: 'GET',
//   headers:{
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzQ5Iiwicm9sZUlkIjoiMTEwIiwicm9sZU5hbWUiOiJNSU5JU1RSWV9BRE1JTiIsInJvbGUiOiJNSU5JU1RSWV9BRE1JTiIsInVzZXJuYW1lIjoiY2l2aWwuc2VydmljZSIsImZpcnN0TmFtZSI6IkZvciBDaXZpbCBTZXJ2aWNlICIsImxhc3ROYW1lIjoiICIsImVtYWlsIjoieW9uYXRhbi5tZWt1cmlhdy56ZUBnbWFpbC5jb20iLCJ0d29mYWN0b3JlbmFibGVkIjoiRmFsc2UiLCJuYmYiOjE2ODc5NTE3MzgsImV4cCI6MTY4Nzk4MDUzOCwiaWF0IjoxNjg3OTUxNzM4fQ.c4VGCiyV6bOTwJ8FFe9JW-4BnG3EkD9nKVMwSrLBxis',
//     mode: 'cors',
//   credentials: 'include'
//   } 
  
// };
// async function getScores(UrlMain) {
//   const response = await fetch(UrlMain, requestOptions);
//   const data = await response.json();
//   console.log(response);
//   console.log(data);
//   //return response.json();
// }
//new code 2
//----------------------------------------------------
const fetchData = async () => {
  const options = {
    method: 'GET',
    headers: {
      //'Content-Type': 'application/json',
      //Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzQ5Iiwicm9sZUlkIjoiMTEwIiwicm9sZU5hbWUiOiJNSU5JU1RSWV9BRE1JTiIsInJvbGUiOiJNSU5JU1RSWV9BRE1JTiIsInVzZXJuYW1lIjoiY2l2aWwuc2VydmljZSIsImZpcnN0TmFtZSI6IkZvciBDaXZpbCBTZXJ2aWNlICIsImxhc3ROYW1lIjoiICIsImVtYWlsIjoieW9uYXRhbi5tZWt1cmlhdy56ZUBnbWFpbC5jb20iLCJ0d29mYWN0b3JlbmFibGVkIjoiRmFsc2UiLCJuYmYiOjE2ODc5NTE3MzgsImV4cCI6MTY4Nzk4MDUzOCwiaWF0IjoxNjg3OTUxNzM4fQ.c4VGCiyV6bOTwJ8FFe9JW-4BnG3EkD9nKVMwSrLBxis',
         mode: 'cors',
       credentials: 'include'
    },
  };

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=t`;
  const response = await fetch(url, options)
  console.log(response);
  const data = await response.json();
    console.log(data);
  if (!response.ok) {
    throw new Error('Could not fetch data');
  }
  const text = response.json();
    return text;
};

 // --------------------------------option 3 code 

// const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=t'; 
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzQ5Iiwicm9sZUlkIjoiMTEwIiwicm9sZU5hbWUiOiJNSU5JU1RSWV9BRE1JTiIsInJvbGUiOiJNSU5JU1RSWV9BRE1JTiIsInVzZXJuYW1lIjoiY2l2aWwuc2VydmljZSIsImZpcnN0TmFtZSI6IkZvciBDaXZpbCBTZXJ2aWNlICIsImxhc3ROYW1lIjoiICIsImVtYWlsIjoieW9uYXRhbi5tZWt1cmlhdy56ZUBnbWFpbC5jb20iLCJ0d29mYWN0b3JlbmFibGVkIjoiRmFsc2UiLCJuYmYiOjE2ODc5NTE3MzgsImV4cCI6MTY4Nzk4MDUzOCwiaWF0IjoxNjg3OTUxNzM4fQ.c4VGCiyV6bOTwJ8FFe9JW-4BnG3EkD9nKVMwSrLBxis'; // Replace with your Bearer token

// fetch(url, {
//   headers: {
//     method: 'GET',
//     //'Authorization': `Bearer ${token}`,
//     'Allow CORS': 'Access-Control-Allow-Origin '*''
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     // Process the response data
//     console.log(data);
//   })
//  ;

