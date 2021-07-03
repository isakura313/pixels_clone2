export const state = () => ({
    paginationNumber: 1
})

export const mutations = {
    updatePagination(state, value) {
        console.log(value)
        state.paginationNumber = value
    }
}