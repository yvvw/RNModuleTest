import { AppRegistry } from 'react-native'
import GeetestSensebot, { GSError, ERROR_TYPE } from '@yyyyu/react-native-geetest-sensebot'

const main = async () => {
  const api1 = 'http://www.geetest.com/demo/gt/register-test'
  const api2 = 'http://www.geetest.com/demo/gt/validate-test'
  GeetestSensebot.configApi(api1, api2)
  GeetestSensebot.setMaskColor('#0004')

  try {
    const result = await GeetestSensebot.captcha()
    console.log(result)
  } catch (e) {
    if (e instanceof GSError) {
      const { errCode, errMsg } = e
      switch (errCode) {
        case ERROR_TYPE.API1:
          console.error('api1 error %s', errMsg)
          break
        case ERROR_TYPE.CAPTCHA:
          console.error('captcha error %s', errMsg)
          break
        case ERROR_TYPE.API2:
          console.error('api2 error %s', errMsg)
          break
      }
    } else {
      console.error(e.message)
    }
  }
}

const App = () => {
  main()
  return null
}

AppRegistry.registerComponent('RNModuleTest', () => App)
