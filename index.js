import { AppRegistry } from 'react-native'
import wechat from '@yyyyu/react-native-wechat'

const main = async () => {
  try {
    await wechat.registerApp({ appId: 'you app id', isDebug: true })
  } catch (e) {
    console.error(e.message)
  }
  try {
    const result = await wechat.sendAuthRequest({ state: 'signal' })
    console.log(result)
  } catch (e) {
    console.error(e.message)
  }
}

const App = () => {
  main()
  return null
}

AppRegistry.registerComponent('RNModuleTest', () => App)
