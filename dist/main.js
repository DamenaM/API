fetch("http://hemis.ethernet.edu.et/backend/StudentGraduate/GetStudentGraduatesByInstitution/202122/AASTU",{method:"GET",body:JSON.stringify({author:"bobby hadz",title:"Using fetch correctly in JavaScript"}),headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzQ5Iiwicm9sZUlkIjoiMTEwIiwicm9sZU5hbWUiOiJNSU5JU1RSWV9BRE1JTiIsInJvbGUiOiJNSU5JU1RSWV9BRE1JTiIsInVzZXJuYW1lIjoiY2l2aWwuc2VydmljZSIsImZpcnN0TmFtZSI6IkZvciBDaXZpbCBTZXJ2aWNlICIsImxhc3ROYW1lIjoiICIsImVtYWlsIjoieW9uYXRhbi5tZWt1cmlhdy56ZUBnbWFpbC5jb20iLCJ0d29mYWN0b3JlbmFibGVkIjoiRmFsc2UiLCJuYmYiOjE2ODc5NTE3MzgsImV4cCI6MTY4Nzk4MDUzOCwiaWF0IjoxNjg3OTUxNzM4fQ.c4VGCiyV6bOTwJ8FFe9JW-4BnG3EkD9nKVMwSrLBxis","Content-Type":"application/json"}}).then((i=>{if(!i.ok)throw new Error(`Error! status: ${i.status}`);return i.json()})).catch((i=>{console.log("error: ",i)})).then((i=>{console.log(i)}));