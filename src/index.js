
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
      //  "content-[type]": "application/json",
      "Content-Type": "application/json",
      //  Accept:'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzQ5Iiwicm9sZUlkIjoiMTEwIiwicm9sZU5hbWUiOiJNSU5JU1RSWV9BRE1JTiIsInJvbGUiOiJNSU5JU1RSWV9BRE1JTiIsInVzZXJuYW1lIjoiY2l2aWwuc2VydmljZSIsImZpcnN0TmFtZSI6IkZvciBDaXZpbCBTZXJ2aWNlICIsImxhc3ROYW1lIjoiICIsImVtYWlsIjoieW9uYXRhbi5tZWt1cmlhdy56ZUBnbWFpbC5jb20iLCJ0d29mYWN0b3JlbmFibGVkIjoiRmFsc2UiLCJuYmYiOjE2ODc5NTE3MzgsImV4cCI6MTY4Nzk4MDUzOCwiaWF0IjoxNjg3OTUxNzM4fQ.c4VGCiyV6bOTwJ8FFe9JW-4BnG3EkD9nKVMwSrLBxis',
        'Allow CORS': 'Access-Control-Allow-Origin '*''
      } 
      
};

fetch("http://hemis.ethernet.edu.et/backend/StudentGraduate/GetStudentGraduatesByInstitution/202122/AASTU", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
   .catch(error => console.log('MY API error is', error));
  
   


