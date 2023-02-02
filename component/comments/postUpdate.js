export const SendPostReplies = async (value) => {
  try {
    const res = await fetch("/api/Replies/", {
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
    const res = await fetch("/api/Replies/", {
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
    const res = await fetch("/api/Comment/", {
      method: "PATCH",
      body: JSON.stringify(value),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
