import {Router} from 'easyserver.js';
export default class user extends Router{
    constructor(){
        super();
    }
    indexAction(){
       
        this.res.send('hello world');
    }
}