import React from 'react'
import Center from './Center'
import Search from './Search'

export default function ChangeAble(props) {
  console.log(props);
  return <React.Fragment> {props.toggle ? <Center /> : <Search />} </React.Fragment>
}
