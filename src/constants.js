export const cityProvide = Symbol("city");
export const activeIndexProvide = Symbol("activeIndex");

export const API_ENDPOINT = "https://api.weatherapi.com/v1";

export const ERRORS = {
  400: "Указанный город не найден",
  500: "Произошла ошибка на сервере",
};
