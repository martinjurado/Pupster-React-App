import axios from "axios";

const BASEURL = "https://dog.ceo/api/breeds/image/random";
const BREEDURL = "https://dog.ceo/api/breed/";
const BREEDLIST = "https://dog.ceo/api/breeds/list";

export default {

    getDog: function() {
        return axios.get(BASEURL);
    },
    
    getBreed: function(query) {
        return axios.get(BREEDURL + query + "/images/random/3" )
    },

    getBreedList: function() {
        return axios.get(BREEDLIST);
    }
}