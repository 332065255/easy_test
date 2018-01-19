import {Router} from './../../lib/lib/index';
export default class Add extends Router{
    constructor(){
        super()
    }
    indexAction(){
        this.res.send('hello this is add');
    }
}