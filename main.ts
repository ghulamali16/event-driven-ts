import { Event } from './Event';
import { EventDispatcher } from './EventDispatcher';

const dispatcher = new EventDispatcher();

function onUserLogin(event: Event) {
  console.log(`User logged in with data: ${event.data.username}`);
}

function onUserLogout(event: Event) {
  console.log('User logged out');
}

// Register listeners
dispatcher.addEventListener('userLogin', onUserLogin);
dispatcher.addEventListener('userLogout', onUserLogout);

// Simulate events
dispatcher.dispatchEvent(new Event('userLogin', { username: 'Saad' }));
dispatcher.dispatchEvent(new Event('userLogout'));

// Remove the logout listener and dispatch again
dispatcher.removeEventListener('userLogout', onUserLogout);
dispatcher.dispatchEvent(new Event('userLogout'));  // No output since the listener is removed
