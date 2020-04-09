import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { getContents } from './utils'

dotenv.config()

const PORT = process.env.PORT || 80
const app: Application = express()

app.use(bodyParser.json())

app.use(cors())

app.get('/', async (req: Request, res: Response) => {
  const data = await getContents('http://localhost:81')
  console.log(data)
  res.send('deneme')
})

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})

export default app
