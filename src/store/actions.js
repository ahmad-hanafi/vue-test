import axios from 'axios'
const baseURL = 'http://localhost:3000/list'

export function getProducts({ commit }) {
    axios
    .get(`${baseURL}`)
    .then((response) => {
        commit('SET_PRODUCTS', response.data)
    })
    .catch((error) => console.log(error))
}

export function getProductById ({commit}, { id, router}) {
    axios
    .get(`${baseURL}/${id}`)
    .then((response) => {
        commit('SET_PRODUCTBYID', response.data)
        router.push('/update/')
    })
}

export function addProduct ({commit}, {name, quantity, router}) {
    const addData = {
        name: name,
        quantity: quantity
      }
    axios
    .post(`${baseURL}`, addData)
    .then(response => {
      router.push('/')
    })
    .catch(error => console.log(error))
}

export function updateProduct({ state, dispatch }, {id, router}) {
    const dataUpdate = {
        name: state.product.name,
        quantity: state.product.quantity
    }
    axios
    .put(`${baseURL}/${id}`, dataUpdate)
    .then((response) => {
        dispatch('getProducts')
        router.push('/')
    })
    .catch((error) => console.log(error))
}

export function deleteProduct ({dispatch}, {id}) {
    axios
    .delete(`${baseURL}/${id}`)
    .then((response) => {
        dispatch('getProducts')
    })
    .catch((error) => console.log(error))
}