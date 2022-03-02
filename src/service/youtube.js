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
        const response = await this.youtube.get('videos', {
            params: {
              part: 'snippet',
              chart: 'mostPopular',
              maxResults: 25,
            },
          });
          return response.data.items;
    }
}

export default Youtube;