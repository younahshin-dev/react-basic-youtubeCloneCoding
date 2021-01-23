class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async searchList(searchText) {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            }
        });
        return response.data.items;
    }

    async mostPopular() {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&maxResults=24&key=${this.key}&type=video`, this.getRequestOptions)
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;