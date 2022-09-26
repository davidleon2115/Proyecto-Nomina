
const data = [
    {id:1, nombre:'Juan'},
    {id:2, nombre:'Marcos'}
];
class Model
{
    public data:any;
    constructor(){
        this.data = data;
    }

    get(){
        return this.data;
    }
}

export default new Model();