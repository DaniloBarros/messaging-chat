export async function createConversation ({ api }) {
  const { data: result } = await api.post('/conversations')
  // process or send data somewhere
  return result
}
