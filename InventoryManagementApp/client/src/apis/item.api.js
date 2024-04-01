const create = async (item) => {
    try {
      let response = await fetch("/api/inventory/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  export { create };
  