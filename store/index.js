const url = 'http://localhost:3001/messages'

export const state = () => ({
  data: [],
  name: '',
  id: 0,
})

export const getters = {
  loading({ data }) {
    return !data
  },
  messages({ data }) {
    return data.map(({ name, text }) => ({ name, text }))
  },
}

export const mutations = {
  setData(state, data) {
    state.data = state.data.concat(data)
    state.id = data.slice(-1)[0]?.id
  },
  setName(state, name) {
    state.name = name
  },
}

export const actions = {
  async updateManager({ state, commit }, timer) {
    const response = await fetch(url + `?_start=${state.id}&_limit=${100}`)
    const data = await response.json()
    if (!data.length) return
    console.log('id', state.id, !data)
    commit('setData', data)
  },

  async send({ state }, text) {
    const requestBody = {
      name: state.name,
      text,
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
  },
}

const start = async store => {
  const timer = setInterval(() => store.dispatch('updateManager', timer), 250)
}

export const plugins = [start]
