const categorizeStates = async () => {
  const stateData = await fetch('./state-emissions.json')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      return null;
    });

  if (!stateData) return null;
  stateData.forEach((state) => {
    const id = state.abbreviation;
    const element = document.getElementsByClassName(id)[0];
    if (state[2020] > 97) {
      if (element) {
        element.setAttribute('class', `${element.classList || ''} category1`);
      }
    } else if (state[2020] >= 81) {
      if (element) {
        element.setAttribute('class', `${element.classList || ''} category2`);
      }
    } else if (state[2020] >= 65) {
      if (element) {
        element.setAttribute('class', `${element.classList || ''} category3`);
      }
    } else if (state[2020] >= 32) {
      if (element) {
        element.setAttribute('class', `${element.classList || ''} category4`);
      }
    } else if (state[2020] >= 16) {
      if (element) {
        element.setAttribute('class', `${element.classList || ''} category5`);
      }
    } else if (element) {
      element.setAttribute('class', `${element.classList || ''} category6`);
    }
  });
  return null;
};

categorizeStates();
