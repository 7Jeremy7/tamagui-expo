import axios from  'axios';

export const ApiMovie = "http://10.0.3.165:8080/film"
export const ApiScene = "http://10.0.3.165:8080/scene"

export const getApiMovie = async() =>{
    const response = await axios.get(ApiMovie);
    return response.data;
}

export const getApiScene = async(filmId: number) =>{
    const response = await axios.get(`${ApiScene}?filmId=${filmId}`);
    return response.data;
}