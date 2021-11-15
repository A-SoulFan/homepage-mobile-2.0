import {http} from './http'

export const getVideoList = async (page,tag_id,sort,part,rank,ctime,type) => {
  const res = await http.get(`/getBV`, {params: {page,tag_id,sort,part,rank,ctime,type}})
  return res.data
}
