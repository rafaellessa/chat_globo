import Express from 'express'
const app = Express()

app.listen(process.env.CHAT_API_PORT, () => {
  console.log(`Server listen on port ${process.env.CHAT_API_PORT}`)
})
