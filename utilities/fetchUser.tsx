export const fetchUser = async ({
  url,
  isCached = false,
}: {
  url: string;
  isCached?: boolean;
}) => {
  let response;
  if (isCached) {
    response = await fetch(url);
  } else {
    response = await fetch("https://randomuser.me/api/", {
      cache: "no-store",
    });
  }

  const data = await response.json();
  const user = data.results;

  return user[0].name.first;
};
