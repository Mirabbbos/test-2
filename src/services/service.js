import instance from "./index";

export async function getCardItems(url) {
  let response = await instance.get(url);
  return response;
}

export async function getModuls() {
  let response = await instance.get(
    "v2/home/get-selections?itemsPerPage=3&page=1"
  );
  return response;
}