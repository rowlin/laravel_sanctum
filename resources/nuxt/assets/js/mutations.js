export function SET_OBJ(state, payload) {
  // console.log(payload)
  if (payload.data) {
    console.log('we here', payload.data+'='+payload.value)
    let path=''
    for (let i of payload.data) {
      console.log(i)
      path+='['+i+']'
    }
    console.log(path)
    console.log(state[payload.name]+path)
  }
  else if (payload.key && !payload.subkey) {
    state[payload.name][payload.key] = payload.value
  } else if (payload.key && payload.subkey) {
    state[payload.name][payload.key][payload.subkey] = payload.value
  } else {
    state[payload.name] = payload.value
  }
}

export function DELETE_KEY(state, payload) {
  if (payload.key) {
    state[payload.name][payload.key] = payload.val
    console.log(payload)
  } else {
    // state[payload.nameObj] = payload.val
  }
}

export function ADD_ITEM_ARRAY_TOP(state, payload) {
  //добавляем элемент сверху первым
  if (payload.key && !payload.arrIdx) {
    state[payload.name][payload.key].unshift(payload.value)
  }
  else {
    state[payload.name].unshift(payload.value)
  }
}

export function ADD_ITEM_ARRAY_BOTTOM(state, payload) {
  //добавляем элемент последним
  if (payload.key) {
    state[payload.name][payload.key].push(payload.value)
  } else {
    state[payload.name].push(payload.value)
  }
}

export function DELETE_ITEM_ARRAY(state, payload) {
  if (payload.key) {
      let filtered = state[payload.name][payload.key].filter(item => item !== payload.value)
    state[payload.name][payload.key] = filtered
  } else {
    let filtered = state[payload.name].filter(item => item.id !== payload.value)
    state[payload.name] = filtered
  }
}

export function REMOVE_PROPERTY(obj, fromKey, toKey) {
  obj[toKey] = obj[fromKey];
  delete obj[fromKey];
  return obj
}
