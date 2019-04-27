import * as types from './types'

export default (name)=>(val=
{
  show: true,
  message: 'hello'
}, act)=>
{
  switch (act.type) {
    case types.SAYHELLO_SET_+name:
      val=
      {
        ...val,
        message: act.val
      }
      return val
    case types.SAYHELLO_HIDE_+name:
      val=
      {
        ...val,
        show: false
      }
      return val
    default:
      return val
  }
}