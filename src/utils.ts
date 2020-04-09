import http from 'http'
// const appsToLoad = [
//   { name: 'header', url: 'https://microfrontends-header.herokuapp.com/' },
//   { name: 'productsList', url: 'https://microfrontends-products-list.herokuapp.com/' },
//   { name: 'cart', url: 'https://microfrontends-cart.herokuapp.com/' }
// ]

// let previousFlushedData = ''

// const load = (piece, index) =>
//   getContents(piece.url).then(data => {
//     appsToLoad[index].data = data
//     flushData()
//   })

// const buildDataForEjs = () =>
//   appsToLoad.reduce((params, app) => {
//     params[app.name] = app.data || 'PENDING'
//     return params
//   }, {})

// const flushData = () => {
//   const dataForEjs = buildDataForEjs()
//   ejs.renderFile('views/index.ejs', dataForEjs, {}, (err, renderedHtml) => {
//     if (err) throw err

//     const htmlToBeFlushed = renderedHtml.split('PENDING')[0].replace(previousFlushedData, '')

//     // chunks have to have at least 4096 bytes to make sure browsers print them
//     res.write(padRight(htmlToBeFlushed, 4096, ' '))
//     previousFlushedData += htmlToBeFlushed
//   })
// }

// flushData()
// Promise.all(appsToLoad.map(load)).then(() => res.end())

export const getContents = (url: string) =>
  new Promise((resolve, reject: any) => {
    http.get(url, (res: any) => {
      const { statusCode } = res
      const contentType = res.headers['content-type']

      return resolve(res)
    })
  })
