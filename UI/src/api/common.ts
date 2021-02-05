import axios from 'axios'

const error = (e: any) => {
  return {
    status: 'FAIL',
    data: e
  }
}

const commonApi = {
  async asyncCall() {
    try {
      const response = await axios.get(`http://localhost:3000/settings`)
      return response.data
    } catch (e) {
      return error(e)
    }
  },

  normalCall() {
    try {
      return axios.get(`http://localhost:3000/api/jsonBlob/872e6115-41d3-11ea-9498-1b69328f6429`).then(function (response) {
        return response.data
      })
    } catch (e) {
      return error(e)
    }
  },


}

export default commonApi