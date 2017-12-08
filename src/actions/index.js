
const API_URL = 'https://wagon-garage-api.herokuapp.com/';

// CreateCar

export function createCar(garage, car, callback) {
  const url = `${API_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(r => r.json())
    .then(() => callback());


  return {
    type: 'CREATE_CAR',
    payload: request
  };
}

// List cars

export function fetchCars(garage) {
  const url = `${API_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

// Remove a car

export function removeCar(history, car) {
  const url = `${API_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_CAR',
    payload: car
  };
}
