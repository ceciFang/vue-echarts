import $axios from 'axios'

const serverAddr = 'http://...'

export const axios = $axios.create({
  baseURL: serverAddr
})
