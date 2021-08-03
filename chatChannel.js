import WebSocket from 'ws'

function openChat(conversationId) {
  return new WebSocket(`ws://localhost:3000/conversation/${conversationId}`)
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
