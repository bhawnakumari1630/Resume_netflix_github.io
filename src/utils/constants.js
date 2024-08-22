const API_URL = 'AIzaSyByCUOff-LeymbYI6cuhqENJe5w7qT5ZoI'

export const apiUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + API_URL

const videoID = ''
export const videoByID_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=` + API_URL
 
// for more results we added the "maxResults=50" to our api string

export const channels_url = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCgVg6dmZHCxze_ay0bolPew&key=" + API_URL
