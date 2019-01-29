
import initialData from "../../initialData";

const initialState = {
    initialData: initialData,
};

export default function savings(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}