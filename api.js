async function getApi() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await response.json();

    console.log(data)

    let pessoa = {
      id : data.id,
      name : data.name,
      username : data.username,
      email : data.email
    }
    console.log(JSON.stringify(pessoa))
    document.body.innerHTML += JSON.stringify(pessoa)

    data.forEach((data) => {
      const obj = {
        name: data.name,
        email: data.email
      };
      console.log(JSON.stringify(obj));
    });

  }catch(error){
    console.error('404')
  }
}
getApi()