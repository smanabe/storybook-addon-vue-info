import constructorToString from './utils/constructorToString'

import ListInfo from './types/ListInfo'
import { RuntimeComponentOptions } from './types/VueRuntime'

/**
 * Get properties informations from patternlists instance.
 * @param component Runtime patternlists instance
 */
function getListsInfo(patternlists: RuntimeComponentOptions): ListInfo[] {
  const { props } = patternlists

  if (!props) {
    return []
  }

  return Object.keys(props).map(name => {
    const list = (props as any)[name]

    // If there are no lists defined in Object sytle,
    // Vue does not convert "list: Constructor" into Object style (See #3).
    if (typeof list === 'function') {
      return {
        name,
        type: constructorToString(list),
        required: false,
        default: undefined
      }
    }

    return {
      name,
      type: constructorToString(list.type),
      required: !!list.required,
      default:
        typeof list.default === 'function' ? list.default() : list.default
    }
  })
}

export default getListsInfo
