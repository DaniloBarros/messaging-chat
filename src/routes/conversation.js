import { Router } from "express";
import { createConversation } from '../useCases/createConversation.js';
import api from '../api/axios.js'
import { sendMessage } from "../useCases/sendMessage.js";

export function createRoutes () {
  const router = Router()
  router.post('/', async (req, res) => {
    const conversation = await createConversation({ api })
    res.json({ data: conversation })
  })
  router.post('/:id/message', async (req, res) => {
    const { id } = req.params
    const data = req.body || {}
    const message = await sendMessage({ api, data, id })
    res.json({ data: message })
  })

  return router
}
