const state = () => ({
  userData: null
})

const actions = {
  fetchUserData ({ commit }) {
    const mockData = {
      username: 'Test',
      email: 'test@test.com'
    }

    commit('setUserData', mockData)
  }
}

const mutations = {
  setUserData (state, data) {
    state.userData = data
  }
}

const getters = {
  getUserData (state) {
    return state.userData
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
