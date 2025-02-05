import { fetchApi } from "@/configs/fetchApi";
import { GetOfferConnectionParams } from "@/types/virtual-assistant";

const BASE_URL = "/api";
export const offerConnection = async (body: GetOfferConnectionParams) => {
  const response = await fetchApi.post(
    "http://51.8.80.71:8080" + `/offer`,
    body
  );

  return response;
};
export const checkHealth = async () => {
  const response = await fetchApi.get(BASE_URL);

  return response;
};
