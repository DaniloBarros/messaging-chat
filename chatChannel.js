import WebSocket from 'ws'

const PORT = process.env.PORT || 3000
const BASE_URL = 'ws://js-server'

function openChat(conversationId) {
  return new WebSocket(`${BASE_URL}:${PORT}/conversation/${conversationId}`)
}

function chat() {
  const CONV_ID = process.env.CONV_ID

  const chatSocket = openChat(CONV_ID)
  chatSocket.on('message', msg => {
    const now = new Date()
    const redableNow = now.toLocaleString()
    console.log(`${redableNow} - ${msg}`)
  })
}

chat()
