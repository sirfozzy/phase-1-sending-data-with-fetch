// Add your code here
const submitData= function(userName, userEmail) {
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify({
            "name":userName,
            "email":userEmail
        })
    })
    
    .then(response=> response.json())
    .then(data=>renderId(data))
    .catch((error)=> {
        const span=document.createElement("span")
        span.innerText=error.message;
        document.body.append(span)
    
})


const renderId=data=> {
    const span=document.createElement("span")
    span.innerText=data.id;
    document.body.append(span)
    }
}