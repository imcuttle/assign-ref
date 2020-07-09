/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
import assignRef from '../'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

describe('assignRef', function () {
  beforeEach(() => {
    document.body.innerHTML = ''

    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)
  })

  it('should works', function () {
    const refObj = React.createRef()
    let ref = null
    const refCallback = (instance) => (ref = instance)

    const elem = React.createElement('div', {
      ref: (instance) => {
        assignRef(refObj, instance)
        assignRef(refCallback, instance)
      }
    })
    ReactDOM.render(elem, document.getElementById('root'))

    expect(ref).toBe(refObj.current)

    expect(ref).toBe(document.getElementById('root').firstChild)
  })
})
