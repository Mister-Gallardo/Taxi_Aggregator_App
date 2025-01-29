import axios from "axios";

const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "6b5190dee09c878133d6d8e4f351b3ca278aa6c1";

const options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    }
}

export const fetchAddress = async (query: string) => {
    const { data } = await axios.post(url, { query: query }, options)

    return data;
}