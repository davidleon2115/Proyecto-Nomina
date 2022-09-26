import model from "../models/model";
// import view from "../view/view";


class Controller
{
    getAll()
    {
        return model.get();
    }
}

export default new Controller();
