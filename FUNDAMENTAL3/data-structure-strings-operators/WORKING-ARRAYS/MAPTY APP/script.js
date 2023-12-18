// 'use strict';

// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);
//   clicks = 0;

//   constructor(coords, distance, duration) {
//     // this.date = ...
//     // this.id = ...
//     this.coords = coords; // [lat, lng]
//     this.distance = distance; // in km
//     this.duration = duration; // in min
//   }

//   _setDescription() {
//     // prettier-ignore
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
//       months[this.date.getMonth()]
//     } ${this.date.getDate()}`;
//   }

//   click() {
//     this.clicks++;
//   }
// }

// class Running extends Workout {
//   type = 'running';

//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//     this._setDescription();
//   }

//   calcPace() {
//     // min/km
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// class Cycling extends Workout {
//   type = 'cycling';

//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevationGain = elevationGain;
//     // this.type = 'cycling';
//     this.calcSpeed();
//     this._setDescription();
//   }

//   calcSpeed() {
//     // km/h
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }

// // const run1 = new Running([39, -12], 5.2, 24, 178);
// // const cycling1 = new Cycling([39, -12], 27, 95, 523);
// // console.log(run1, cycling1);

// ///////////////////////////////////////
// // APPLICATION ARCHITECTURE
// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// class App {
//   #map;
//   #mapZoomLevel = 13;
//   #mapEvent;
//   #workouts = [];

//   constructor() {
//     // Get user's position
//     this._getPosition();

//     // Get data from local storage
//     this._getLocalStorage();

//     // Attach event handlers
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//     containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
//   }

//   _getPosition() {
//     if (navigator.geolocation)
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your position');
//         }
//       );
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

//     const coords = [latitude, longitude];

//     this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // Handling clicks on map
//     this.#map.on('click', this._showForm.bind(this));

//     this.#workouts.forEach(work => {
//       this._renderWorkoutMarker(work);
//     });
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _hideForm() {
//     // Empty inputs
//     inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
//       '';

//     form.style.display = 'none';
//     form.classList.add('hidden');
//     setTimeout(() => (form.style.display = 'grid'), 1000);
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     const validInputs = (...inputs) =>
//       inputs.every(inp => Number.isFinite(inp));
//     const allPositive = (...inputs) => inputs.every(inp => inp > 0);

//     e.preventDefault();

//     // Get data from form
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;

//     // If workout running, create running object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;

//       // Check if data is valid
//       if (
//         // !Number.isFinite(distance) ||
//         // !Number.isFinite(duration) ||
//         // !Number.isFinite(cadence)
//         !validInputs(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Inputs have to be positive numbers!');

//       workout = new Running([lat, lng], distance, duration, cadence);
//     }

//     // If workout cycling, create cycling object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;

//       if (
//         !validInputs(distance, duration, elevation) ||
//         !allPositive(distance, duration)
//       )
//         return alert('Inputs have to be positive numbers!');

//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }

//     // Add new object to workout array
//     this.#workouts.push(workout);

//     // Render workout on map as marker
//     this._renderWorkoutMarker(workout);

//     // Render workout on list
//     this._renderWorkout(workout);

//     // Hide form + clear input fields
//     this._hideForm();

//     // Set local storage to all workouts
//     this._setLocalStorage();
//   }

//   _renderWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         })
//       )
//       .setPopupContent(
//         `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
//       )
//       .openPopup();
//   }

//   _renderWorkout(workout) {
//     let html = `
//       <li class="workout workout--${workout.type}" data-id="${workout.id}">
//         <h2 class="workout__title">${workout.description}</h2>
//         <div class="workout__details">
//           <span class="workout__icon">${
//             workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
//           }</span>
//           <span class="workout__value">${workout.distance}</span>
//           <span class="workout__unit">km</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">⏱</span>
//           <span class="workout__value">${workout.duration}</span>
//           <span class="workout__unit">min</span>
//         </div>
//     `;

//     if (workout.type === 'running')
//       html += `
//         <div class="workout__details">
//           <span class="workout__icon">⚡️</span>
//           <span class="workout__value">${workout.pace.toFixed(1)}</span>
//           <span class="workout__unit">min/km</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">🦶🏼</span>
//           <span class="workout__value">${workout.cadence}</span>
//           <span class="workout__unit">spm</span>
//         </div>
//       </li>
//       `;

//     if (workout.type === 'cycling')
//       html += `
//         <div class="workout__details">
//           <span class="workout__icon">⚡️</span>
//           <span class="workout__value">${workout.speed.toFixed(1)}</span>
//           <span class="workout__unit">km/h</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">⛰</span>
//           <span class="workout__value">${workout.elevationGain}</span>
//           <span class="workout__unit">m</span>
//         </div>
//       </li>
//       `;

//     form.insertAdjacentHTML('afterend', html);
//   }

//   _moveToPopup(e) {
//     // BUGFIX: When we click on a workout before the map has loaded, we get an error. But there is an easy fix:
//     if (!this.#map) return;

//     const workoutEl = e.target.closest('.workout');

//     if (!workoutEl) return;

//     const workout = this.#workouts.find(
//       work => work.id === workoutEl.dataset.id
//     );

//     this.#map.setView(workout.coords, this.#mapZoomLevel, {
//       animate: true,
//       pan: {
//         duration: 1,
//       },
//     });

//     // using the public interface
//     // workout.click();
//   }

//   _setLocalStorage() {
//     localStorage.setItem('workouts', JSON.stringify(this.#workouts));
//   }

//   _getLocalStorage() {
//     const data = JSON.parse(localStorage.getItem('workouts'));

//     if (!data) return;

//     this.#workouts = data;

//     this.#workouts.forEach(work => {
//       this._renderWorkout(work);
//     });
//   }

//   reset() {
//     localStorage.removeItem('workouts');
//     location.reload();
//   }
// }

// const app = new App();

'use strict';

// ///////////////////////////////////////
// APPLICATION ARCHITECTURE
// prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');



// 231. How to Plan a Web Project

/* FLOWCHART
page load --get current location coordinates --render map on curent location
--user clicks on map --render workout form
*/
let map, mapEvent;
// 232. Using the Geolocation 
if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(function(position) {
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    // go to google map and copy the URL, paste it here
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    // 233. Displaying a Map Using Leaflet Library
    const coords = [latitude, longitude];

    // copied from overview leaflet
    map = L.map('map').setView(coords, 13);  //added 'coords' for perfect location

L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', { //from 'org' to 'fr/hot/'
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


    // overview ended 

    // 234. Displaying a Map Marker
    // handling click on map 
    map.on('click', function(mapE) {
        // 235. Rendering Workout Input Form. once clicks on the map, the form input will popout
        mapEvent = mapE;
        form.classList.remove('hidden'); 
        inputDistance.focus();

    })

}, function() {
    alert('Could not get your position')
});
// 235. Rendering Workout Input Form
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

        // 234. Displaying a Map Marker
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng]).addTo(map)  //added 'coords'
    .bindPopup(L.popup({maxWidth: 250, minWidth: 100, autoClose: false, 
    closeOnClick: false, className: 'running-popup', }))

    .setPopupContent('Workout')
    .openPopup();
});
 
// toggling inputCadence and inputElevation
inputType.addEventListener('change', function () {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})
// 233. Displaying a Map Using Leaflet Library
/* google leafletjs.com, click on 'download' and copy the code in 
<link> and <script> of the CDN already hosted. copy the code and
 paste on the html code before the script.js that was linked.
 Go back to overview and copy the code that starts with 'var' keyword and
 paste it in your script.js file after 'longtude' variable, change the 
 'var' to 'const' keyword */

//  234. Displaying a Map Marker
// go to doc in leaflet, marker 

// 235. Rendering Workout Input Form

// 236. Project Architecture
/* USER STORIES
1. Log my running workouts with location, distance, time, pace and steps/minute (cadence).

2. log my cycling workouts with location, distance, time, speed and elevation gain
*/