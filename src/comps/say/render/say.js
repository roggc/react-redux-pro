import React from 'react'
import {store} from '../../../entries/client'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import {saySet, sayHide} from '../redux/actions'
import style from '../style/say.css'

const init= name=> init=>
{
  init.message&& store.dispatch(saySet(name)(init.message))
}

const inst= name=> state=>
{
  const hide= ()=>
  {
    store.dispatch(sayHide(name)())
  }

  const el=
  (
    state.foo.show&&
    <div className={`${style.general}`}>
      {state.foo.val}
      <button onClick={hide}>hide</button>
    </div>
  )
  
  return el
}

export default withState(init)(inst)(reducer)
