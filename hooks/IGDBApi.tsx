import { usePost } from "./REST/POST";

const DEFAULT_URL = "https://api.igdb.com/v4/";
const Client_ID = "3ofc2zxz0jsz6rmk75x8apzyqqy1cl";
const ACCESS_TOKEN = "h10dgejbzrn40q3yldp5xwcsuwo0rg";

const HEADERS = {
    "Client-ID": Client_ID,
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json" 
}

export function FetchRecommendedGamesByGenre(genreId: number) {
    return usePost(
        DEFAULT_URL + "games", 
        HEADERS, 
        `fields name,genres,cover.url; where genres.id = (${genreId}); limit 25;`
    )
}

export function FetchAllGenres() {
    return usePost(
        DEFAULT_URL + "genres", 
        HEADERS, 
        `fields name; limit 5;`
    )
}