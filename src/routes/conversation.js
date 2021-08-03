import { Router } from "express";
import { createConversation } from '../useCases/createConversation.js';
import api from '../api/axios.js'
import { sendMessage } from "../useCases/sendMessage.js";

export function createRoutes (sockets) {
  const router = Router()
  router.post('/', async (req, res) => {
    const conversation = await createConversation({ api })
    res.json({ data: conversation })
  })

  router.post('/:id/message', async (req, res) => {
    const { id } = req.params
    const data = req.body || {}
    const { raw, message } = await sendMessage({ api, data, id })

    const conversationSockets = sockets.conversations[id] || []
    for (const socket of conversationSockets) {
      socket.send(message)
    }

    res.json({ data: raw })
  })

  router.ws('/:id', (ws, req) => {
    const { id } = req.params

    if(!sockets.conversations[id]) {
      sockets.conversations[id] = []
    }

    const conversationSockets = sockets.conversations[id]
    conversationSockets.push(ws)

    ws.on('close', () => {
      const conversationSockets = sockets.conversations[id]
      conversationSockets.splice(
        conversationSockets.indexOf(ws),
        1
      )
    })

  })

  return router
}
