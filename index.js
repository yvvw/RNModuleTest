import { AppRegistry } from 'react-native'
import mta from '@yyyyu/react-native-mta'

const main = async () => {
  try {
    await mta.startWithAppkey({ appKey: 'you app key' })
  } catch (e) {
    console.error(e.message)
  }
}

const App = () => {
  main()
  return null
}

AppRegistry.registerComponent('RNModuleTest', () => App)
