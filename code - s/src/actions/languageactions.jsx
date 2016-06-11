import  {CHANGE_LANGUAGE} from '../constants/index'

export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    language:language
  }
}
