function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStage.getItm(key));
  } catch (err) {
    return initial;
  }
}

export default getLocalStorage;
