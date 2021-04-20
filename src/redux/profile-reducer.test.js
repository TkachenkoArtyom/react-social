import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, text: 'Привет', likesCount: 8},
        {id: 2, text: 'Я трейдер, мне 8 лет', likesCount: 13},
        {id: 3, text: 'А я Senior, мне 12 лет', likesCount: 10}
    ]
};

it('length of posts should be incremented',  () => {
    // 1. test data
    let action = addPostActionCreator('ing');
    // 2 action
    let newState = profileReducer(state, action);
    // 3 expectation
    expect(newState.posts.length).toBe(4);
    expect(newState.posts[3].text).toBe('ing');
});

it('after deleting length of array should be decrement',  () => {
    // 1. test data
    let action = deletePost(1);
    // 2 action
    let newState = profileReducer(state, action);
    // 3 expectation
    expect(newState.posts.length).toBe(3);
});


