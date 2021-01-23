class YoutubeFetch {
    constructor(apikey) {
        
        this.key = apikey;
        this.getRequestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
    }

    async searchList(searchText) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&maxResults=24&key=${this.key}&type=video`, this.getRequestOptions)
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }

    async mostPopular() {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=24&type=mostPopular&type=video`, this.getRequestOptions);
        const result = await response.json();
        return result.items.map(item => ({...item, id:item.id.videoId}));
    }
}

export default YoutubeFetch;