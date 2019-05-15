import config from "./config";

export const hashPassword = async (user_id: string) => {
  let res = await fetch(config.url, {
    method: "POST",
    body: JSON.stringify({
      query: `{
          session(limit:1) {
            id
          }
        }`
    }),
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-ChangePass-Uid": user_id
    }
  });
};
