
const BASE = 'https://api.b7web.com.br/devsfood/api';

const API =  {
    getCategories: async()=>{
        const res = await fetch(`${BASE}/categories`);
        const json = res.json();
        return json;
    },
    getProducts: async(category, page, search)=>{
        // GET /api/products ([search, page, category])
        let fields = {};
        if(category !== 0) {
            fields.category = category;
        }
        if(page > 0) {
            fields.page = page;
        }
        if(search !== '') {
            fields.search = search;
        }

        /*
        {category: 2, page: 1, search: 'bolo'}
        "category=2&page=1&search=bolo"
        */

        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(`${BASE}/products?${queryString}`);
        const json = res.json();
        return json;
    }
};

export default API;