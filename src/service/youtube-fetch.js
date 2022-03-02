class YoutubeFetch {
    constructor(apikey) {
        
        this.key = apikey;
        this.getRequestOptions = {
        method: 'GET',
        redirect: 'follow',
        'Access-Control-Allow-Origin': true
        };
    }

    async searchList(searchText) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&maxResults=24&key=${this.key}&type=video`, this.getRequestOptions)
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }

    async mostPopular() {
    
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }
}

export default YoutubeFetch;