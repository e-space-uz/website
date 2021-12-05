import axios from 'axios'

export const fetchMultipleRequest = async (requests) => {
    let data
    try {
        data = await Promise.all(
            requests.map(async (request) => {
                const response = request.endpoint
                    ? await axios({
                          url: request.endpoint,
                          method: request?.method || 'GET',
                          ...(request.body && { data: request.body }),
                          ...(request.headers && { headers: request.headers }),
                      })
                          .then((res) => res?.data)
                          .catch(
                              (err) => err?.response?.data || { error: true },
                          )
                    : await axios
                          .get(request)
                          .then((res) => res?.data)
                          .catch(
                              (err) => err?.response?.data || { error: true },
                          )
                return response || null
            }),
        )
    } catch (error) {
        console.log('fetchMultipleRequest =>', error?.response)
    }
    return data
}
