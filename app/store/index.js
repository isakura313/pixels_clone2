export const state = () => ({
 paginationNumber: 1,
 likedPhotos: [],
 deleteId: 0,
});
export const mutations = {
 updatePagination(state, value) {
  state.paginationNumber = value;
 },
 initLikes(state, value) {
  state.likedPhotos = value;
 },
 updateLikes(state, value) {
  if (state.likedPhotos.indexOf(value) === -1) {
   state.likedPhotos.push(value);
   localStorage.setItem("likes", JSON.stringify(state.likedPhotos));
  }
 },
 deleteLikes(state, id) {
  console.log(state.likedPhotos);
  console.log(id);
  state.deleteId = id;
  const filter = state.likedPhotos.filter((item) => {
   return item !== id;
  });
  state.likedPhotos = filter;
  const data = JSON.parse(JSON.stringify(state.likedPhotos));
  localStorage.setItem("likes", JSON.stringify(data));
 },
};

export const actions = {
 getLikes({ commit }) {
  if (localStorage.getItem("likes")) {
   commit("initLikes", JSON.parse(localStorage.getItem("likes")));
  }
 },
};
