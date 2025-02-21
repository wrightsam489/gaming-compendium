import { usePost } from "./REST/POST";

const DEFAULT_URL = "https://api.igdb.com/v4/";
const Client_ID = "3ofc2zxz0jsz6rmk75x8apzyqqy1cl";
const ACCESS_TOKEN = "xda3jg8hkwslogk05fjgoam8v43bim";

const HEADERS = {
    "Client-ID": Client_ID,
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json" 
}

export function FetchGamesById(gameId: number) {
    return usePost(
        DEFAULT_URL + "games", 
        HEADERS, 
        `fields id,name,genres,cover.url; where id = (${gameId});`
    )
}

export function FetchRecommendedGamesByGenre(genreId: number) {
    return usePost(
        DEFAULT_URL + "games", 
        HEADERS, 
        `fields name,genres,cover.url; where genres.id = (${genreId}); limit 5;`
    )
}

export function FetchAllGenres() {
    return usePost(
        DEFAULT_URL + "genres", 
        HEADERS, 
        `fields name; limit 500;`
    )
}