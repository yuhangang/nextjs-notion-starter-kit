import Cookies from 'universal-cookie';

function setCookies<T>(key:string,props:{item:T}):void{
    const cookies = new Cookies();

cookies.set(key, JSON.stringify(props.item), { path: '/' });
console.log(cookies.get(key)); // Pac
}

function getCookies<T>(key:string):T | null {
    const cookies = new Cookies();
 return JSON.parse(cookies.get(key,{})) as T;

}

export {setCookies,getCookies}