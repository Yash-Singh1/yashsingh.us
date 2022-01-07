export const RECEIVE_INFO = 'RECEIVE_INFO';

function infoToAction(info) {
  return {
    type: RECEIVE_INFO,
    info
  };
}

export function fetchInfo() {
  return function (dispatch) {
    import('../data/info.json').then((info) =>
      dispatch(
        infoToAction(
          Object.fromEntries(
            Object.entries(info.default)
              .map((information, index) => [information[0], { ...information[1], index }])
              .sort(
                ({ 1: { date: date1 } }, { 1: { date: date2 } }) =>
                  new Date(date2) - new Date(date1)
              )
          )
        )
      )
    );
  };
}
