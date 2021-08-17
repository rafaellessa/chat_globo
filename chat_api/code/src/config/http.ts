/* eslint-disable import/first */

import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import '../database'
import { routes } from '../routes'
const app = express()
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(routes)

const http = createServer(app)
import '../websocket/socket'
export { http }
