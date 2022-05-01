import {apiKey, api_URL} from './settings'

export default function getTrendingTerms () {
    const apiURL = `${api_URL}/trending/searches?api_key=${apiKey}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const { data } = response
        return data
      })
}