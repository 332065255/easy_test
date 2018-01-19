// import {Router} from 'easyserver.js';
import {Router} from './../../lib/lib/index';
export default class user extends Router{
    constructor(){
        super();
    }
    indexAction(){
       
        this.res.send('hello world');
    }
    getmoreAction(){
        this.res.send('getMore')
    }
}