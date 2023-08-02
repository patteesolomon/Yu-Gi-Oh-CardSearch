import axios from "axios";

//
const baseURL = `http://localhost:5000/cards`;
// port to our express app 
// defining it here makes things easier
// the slash is for everything comming from the default route

export const getCards = () =>{
    const URL = baseURL;// base URL
    const response = axios.get(URL);
    return response;
};

export const getCard = (search: any) => {
    const URL = `${baseURL}/${search}`;
    const response = axios.get(URL);
    return response;
};

export const editCard = (search: any, updatedCard: any) => {
    const URL = `${baseURL}/${search}`;
    const response = axios.put(URL, updatedCard);
    return response;
};

export const createCard = (card: any) => {
    const URL = baseURL;
    const response = axios.post(URL, card);
    return response;
};

export const deleteCard = (search: any) =>
{
    const URL = `${baseURL}/${search}`;
    const response = axios.delete(URL);
    return response;
};

export const getCardTitle = (search: any) => {
    const URL = `${baseURL}/${search}`;
    const response = axios.get(URL);
    return response;
};