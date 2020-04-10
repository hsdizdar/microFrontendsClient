import http from 'http'
const request = require('request')

export const getContents = (url: string) =>
  new Promise((resolve, reject) => {
    request.get(url, (error: any, response: any, body: any) => {
      if (error) return resolve('Error loading ' + url + ': ' + error.message)
      console.log('get contents response', response)
      console.log('get contents body', body)
      return resolve(body)
    })
  })
