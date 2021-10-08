import { axios } from './config'

const getDouList = (params, demo) => {
  console.log('3546')
  if (!demo) {
    return axios.post('接口路径', {
      params
    })
  } else {
    return new Promise(resolve => {
      resolve({
        status: 200,
        data: [
          {
            name: '我的天才女友',
            num: 405,
            path: ''
          },
          {
            name: '逃离比勒陀利亚',
            num: 405,
            path: ''
          },
          {
            name: '与爱同居之永恒的爱',
            num: 405,
            path: ''
          },
          {
            name: '热带雨',
            num: 4035,
            path: ''
          },
          {
            name: '德菲因与卡罗尔：反叛缪斯',
            num: 405,
            path: ''
          },
          {
            name: '切尔诺贝利.禁区电影版',
            num: 405,
            path: ''
          },
          {
            name: '夕雾公园',
            num: 405,
            path: ''
          },
          {
            name: '真相',
            num: 405,
            path: ''
          },
          {
            name: '伊丽莎白不见了',
            num: 405,
            path: ''
          },
          {
            name: '窈窕淑男的日记',
            num: 405,
            path: ''
          }
        ]
        // data: []
      })
    })
  }
}

export default {
  getDouList
}
