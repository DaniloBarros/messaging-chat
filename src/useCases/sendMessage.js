export async function sendMessage ({ api, data, id }) {
  try {
    const { data: result } = await api.post(`/conversations/${id}/messages`, {
      ...data
    })
    const formatMessage = msg => `${msg.name} > ${msg.text}`
    const message = formatMessage(result)
    return {
      raw: result,
      message
    }
  } catch (err) {
    console.log('🚀 ~ file: sendMessage.js ~ line 8 ~ sendMessage ~ err', err)
  }
  // process or send data somewhere
}
