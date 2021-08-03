import axios from 'axios'
import WebSocket from 'ws'

function sendMessage(message, conversationId) {
  return axios.post(`http://localhost:3000/conversation/${conversationId}`, message)
}

function chat(conversationId) {
  return new WebSocket(`ws://localhost:3001/${conversationId}`)
}

export {
  sendMessage,
  chat
}
