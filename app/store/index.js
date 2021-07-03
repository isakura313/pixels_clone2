export const state = () => ({
    paginationNumber: 1,
    likedPhotos:[8580325]
  })
export const mutations = {
    updatePagination(state, value) {
        state.paginationNumber = value
    },
    updateLikes(state, value) {
        if(state.likedPhotos.indexOf(value) === -1) {
            state.likedPhotos.push(value);
        }
        // state.likedPhotos.push(value)
    }
}