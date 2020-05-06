export const saveLS = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        throw new Error();
    }
  };
export const getLS = key => {
    try {
        const items = localStorage.getItem(key);
        return items ? JSON.parse(items) : null;
    } catch (err) {
        throw new Error();
    }
  };
