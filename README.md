
Here’s a new project example with multiple TypeScript files. This project demonstrates a simple event-driven system using TypeScript. It consists of three TypeScript files:

Event.ts - Defines the event class.
EventDispatcher.ts - Handles registering, dispatching, and removing event listeners.
main.ts - Shows how to use the system.
Event.ts
ts
Copy code
export class Event {
  name: string;
  data: any;

  constructor(name: string, data: any = null) {
    this.name = name;
    this.data = data;
  }
}
EventDispatcher.ts
ts
Copy code
import { Event } from './Event';

export class EventDispatcher {
  private listeners: Map<string, Array<(event: Event) => void>>;

  constructor() {
    this.listeners = new Map();
  }

  // Registers a listener for a specific event
  addEventListener(eventName: string, callback: (event: Event) => void): void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName)?.push(callback);
  }

  // Removes a specific listener
  removeEventListener(eventName: string, callback: (event: Event) => void): void {
    const listeners = this.listeners.get(eventName);
    if (listeners) {
      this.listeners.set(eventName, listeners.filter(listener => listener !== callback));
    }
  }

  // Dispatches an event to all listeners
  dispatchEvent(event: Event): void {
    const listeners = this.listeners.get(event.name);
    if (listeners) {
      listeners.forEach(listener => listener(event));
    }
  }
}
main.ts
ts
Copy code
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
README.md
Event-Driven System in TypeScript
This repository showcases a basic event-driven system using TypeScript. The system consists of three files: Event.ts, EventDispatcher.ts, and main.ts. The idea is to create an event system where events can be dispatched and listened to, using strong type safety provided by TypeScript.

Structure
Event.ts: Defines the basic Event class that contains the event name and associated data.
EventDispatcher.ts: Manages event listeners and dispatches events to the appropriate listeners.
main.ts: Contains example usage of the event dispatcher, registering listeners, dispatching events, and removing listeners.
Features
Event Creation: The Event class allows you to create custom events with an event name and optional data.
Event Listener Management: The EventDispatcher class allows you to register, remove, and trigger event listeners.
Type Safety: This implementation leverages TypeScript’s type safety, ensuring that event listeners handle the correct types of events.
Installation and Usage
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/event-system-ts.git
cd event-system-ts
Install TypeScript if you don’t already have it:

bash
Copy code
npm install -g typescript
Compile the TypeScript files:

bash
Copy code
tsc
Run the compiled JavaScript:

bash
Copy code
node main.js
Example
The example in main.ts demonstrates how to:

Register listeners for events.
Dispatch events with associated data.
Remove listeners.
Here’s what the output will look like:

bash
Copy code
User logged in with data: Saad
User logged out
When the logout listener is removed, dispatching the logout event no longer produces any output.

Concepts Demonstrated
Event-driven architecture: Separation of concerns through event dispatching and handling.
TypeScript features: Classes, type safety, and module imports/exports.
Listener management: Adding, removing, and dispatching event listeners.
