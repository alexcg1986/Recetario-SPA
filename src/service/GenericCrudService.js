import axios from "axios";

export default class GenericCrudService {
    url = "https://db-recetario.herokuapp.com/api/";

    async getAll(resource) {
        return await axios.get(this.url + resource);
    }

    async getAllFiltered(resource, parameters) {
        return await axios.post(this.url + resource + "/filtrado", parameters);
    }

    async post(resource, item) {
        return await axios.post(this.url + resource, item);
    }

    async delete(resource, id) {
        return await axios.delete(this.url + resource + "/" + id);
    }
}
