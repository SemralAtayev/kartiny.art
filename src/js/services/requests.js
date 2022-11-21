  
  // request variable
  let request = async function (url, data) {
    let fetchRequest = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await fetchRequest.text();
  };

  let getRequest = async function (url) {
    let fetchRequest = await fetch(url, {
      method: "GET",
    });

    if (!fetchRequest.ok) {
      throw new Error(`Could not fetch ${url}, status: ${fetchRequest.status}`);
  }

    return await fetchRequest.json();
  };

  export {request, getRequest};