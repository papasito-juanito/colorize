import * as types from '../actions/Types';

// 초기 상태를 정의합니다
const initialState = {
    image: '/Users/wonboklee/Desktop/welips/colorize/test/src/assetslip.jpg',
    color: 'red',
    desc: 'lips'
};

//fetch를 해와서
//action부분 바꿔주기
function renderItem(state = initialState, action) {
    switch (action.type) {
        case types.SET_ITEM: 
            return {
                ...state,
                image: state.image,
                color: state.color,
                desc: state.desc
        };
            default:
            return state;
    }
}

export default renderItem;