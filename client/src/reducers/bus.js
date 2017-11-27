export default function bus(state = {}, action) {
  switch(action.type){
    case "BUS_LIST_SAVE":
      return {
        ...state,
        busses: action.busses
      };
    default:
      return state;
  }
}
