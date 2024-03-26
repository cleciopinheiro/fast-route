const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '');
};

export { setStorage, getStorage};