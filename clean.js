import iconlist from './iconlist.json';
import rimraf from 'rimraf';

rimraf('temp', {}, () => {});
rimraf('jsx', {}, () => {});
iconlist.map(icon => {
    rimraf(`${icon}.js`, {}, () => {});
});
rimraf('ffe-icons-react.js', {}, () => {});
