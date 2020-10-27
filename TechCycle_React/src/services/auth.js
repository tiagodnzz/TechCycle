export const usuarioAutenticado = () => localStorage.getItem('usiario-tech') !==null;

export const parseJwt = () => {
    var base64 = localStorage.getItem('usiario-tech').split('.')[1];
    return JSON.parse(window.atob(base64));
}