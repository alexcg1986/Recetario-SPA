export default {
    methods: {
        checkValues(obj) {
            let arrKeys = Object.keys(obj);
            for (let i = 1; i < arrKeys.length; i++) {
                if (!obj[arrKeys[i]]) return false;
                else if (typeof obj[arrKeys[i]] === "object")
                    if (!obj[arrKeys[i]].id) return false;
            }
            return true;
        }
    }
};
