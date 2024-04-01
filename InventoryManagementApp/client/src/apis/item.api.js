const create = async (item, userToken) => {
  try {
    let response = await fetch("/api/inventory/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + userToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getAll = async () => {
  try {
    let response = await fetch("/api/inventory/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (updatedItem, itemName, userToken) => {
  try {
    let response = await fetch("/api/inventory/" + itemName, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
      body: JSON.stringify(updatedItem),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const get = async(itemName, userToken) => {
    try{
        let response = await fetch("/api/inventory/" + itemName, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + userToken,
          },
        });
    
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

export { create, getAll, update, get };
