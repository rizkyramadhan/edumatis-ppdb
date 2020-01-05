import config from "./config";

interface opts {
  debug?: boolean;
  useSession?: boolean;
}

export default async (query: string, options?: opts) => {
  const opt = {
    ...{ useSession: true, debug: false, where: {}, args: "limit:1" },
    ...options
  };

  if (opt.debug) {
    console.log(query);
  }

  let headers: any = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": "edumatis123"
  };

  const response: Response = await fetch(config.url, {
    method: "POST",
    body: JSON.stringify({
      query
    }),
    headers
  });
  const json = await response.json();
  return json.data;
};
