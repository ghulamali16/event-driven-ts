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
