

let comment = [
    {
        name: 'hellow', age: 18
    }
]

export function data   (state=comment[0].age, action) {

    switch (action.type) {

        case "ADD": 
            return state+action.data;
            break;

            case "DEL": 
            return state-action.data;
            break;
        default:
        
            return state;

            break;
    }
}