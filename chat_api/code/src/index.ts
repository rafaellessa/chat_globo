import { http } from './config/http'

http.listen(process.env.CHAT_API_PORT, () => {
  console.log(`Server list on port ${process.env.CHAT_API_PORT}`)
})
