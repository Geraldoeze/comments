

export const SendPostReplies = async (value) => {
  console.log(value)
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/rep/post`,{
      method: "POST",
      body: JSON.stringify(value),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }

  return value;
};

export const SendUpdateReplies = async (value) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/rep/update`,{
      method: "PATCH",
      body: JSON.stringify(value),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const SendUpdateComments = async (value) => {
  // send comment
  try {
    const res =  fetch(`${process.env.BACKEND_URL}/com/update`,{
      method: "PATCH",
      body: JSON.stringify(value),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
