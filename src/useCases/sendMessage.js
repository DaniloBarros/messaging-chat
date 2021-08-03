export async function sendMessage ({ api, data }) {
  try {
    const { data: result } = await api.post(`/conversations/${data.id}/messages`, {
      ...data
    })
    return result
  } catch (err) {
    console.log('🚀 ~ file: sendMessage.js ~ line 8 ~ sendMessage ~ err', err)

  }
  // process or send data somewhere
}
