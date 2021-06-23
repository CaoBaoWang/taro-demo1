import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toMine = ()=>{
    Taro.navigateTo({url: '/pages/mine/mine'})
  }
  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={this.toMine}>minef</Button>
      </View>
    )
  }
}
