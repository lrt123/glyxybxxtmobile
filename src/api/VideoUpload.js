import request from '@/utils/request'
import Axios from "axios";

let config = {
  headers: {
    'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime()
  },
  transformRequest: [function (data) {
    return data
  }]
}

export function VideoUpload(data) {
  let formData = new FormData()
  formData.append("file", data)
  return Axios.post('/bx/video-upload', formData, config);
}

export function DeleteVideo(filename) {
  return request({
    url: '/delvideo?fileName='+ filename,
    method: 'delete'
  })

}
