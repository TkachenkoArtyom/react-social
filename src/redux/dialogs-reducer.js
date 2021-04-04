const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Artyom'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yes'},
        {id: 3, message: 'some'},
        {id: 4, message: 'node'},
        {id: 5, message: 'GG'},
        {id: 6, message: 'Yo'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;

