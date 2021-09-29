export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {favoriteJobs} = action.payload;
      return {...state, favoriteJobs: [...state.favoriteJobs, favoriteJobs]};
    case 'REMOVE_FAVORITE':
      return {
        favoriteJobs: [
          ...state.favoriteJobs.filter(job => job !== action.payload.job),
        ],
      };

    default:
      return state;
  }
}
