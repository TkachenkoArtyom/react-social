const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Artyom'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yes'},
        {id: 3, message: 'some'},
        {id: 4, message: 'node'},
        {id: 5, message: 'GG'},
        {id: 6, message: 'Yo'},
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any) : InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: newMessage}]
            }
        default:
            return state;
    }
}

type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
    newMessage: string
}

export const sendMessageCreator = (newMessage: string): SendMessageCreatorType => ({
    type: SEND_MESSAGE, newMessage
});

export default dialogsReducer;

