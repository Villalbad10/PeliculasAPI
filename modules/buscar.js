export const buscar = (value, data, cont) => {
    cont.innerHTML ="";
    const res = data.filter(peli => peli.title.toLowerCase().includes(value.toLowerCase()));
    return res;
}