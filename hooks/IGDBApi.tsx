import { usePost } from "./REST/POST";

const DEFAULT_URL = "https://api.igdb.com/v4/";
const Client_ID = "3ofc2zxz0jsz6rmk75x8apzyqqy1cl";
const ACCESS_TOKEN = "37vi0cz69qkw969luun2sp3bvsvxaa";

export function FetchRecommendedGames() {
    return usePost(
        DEFAULT_URL, 
        {
            "Client-ID": Client_ID,
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json" 
        }, 
        "fields *; limit 10;"
    )
}