import axios from 'axios';

const KEY = '37184780-a6424730a693355f8efd47397';

async function fetchGallery(query, page, perPage) {
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
    const res = await axios.get(url);
    return res.data;
}
export { fetchGallery };