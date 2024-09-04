
# Event-Driven System in TypeScript

This repository showcases a basic event-driven system using TypeScript. The system consists of three files: `Event.ts`, `EventDispatcher.ts`, and `main.ts`. The idea is to create an event system where events can be dispatched and listened to, using strong type safety provided by TypeScript.

## Structure

1. **`Event.ts`**: Defines the basic `Event` class that contains the event name and associated data.
2. **`EventDispatcher.ts`**: Manages event listeners and dispatches events to the appropriate listeners.
3. **`main.ts`**: Contains example usage of the event dispatcher, registering listeners, dispatching events, and removing listeners.

## Features

- **Event Creation**: The `Event` class allows you to create custom events with an event name and optional data.
- **Event Listener Management**: The `EventDispatcher` class allows you to register, remove, and trigger event listeners.
- **Type Safety**: This implementation leverages TypeScript’s type safety, ensuring that event listeners handle the correct types of events.

## Installation and Usage

1. Clone the repository:

   ```
   git clone https://github.com/ghulamali16/event-driven-ts.git
   cd event-driven-ts
   ```

2. Install TypeScript if you don’t already have it:

   ```
   npm install -g typescript
   ```

3. Compile the TypeScript files:

   ```
   tsc
   ```

4. Run the compiled JavaScript:

   ```
   node main.js
   ```

## Example

The example in `main.ts` demonstrates how to:

1. Register listeners for events.
2. Dispatch events with associated data.
3. Remove listeners.

Here’s what the output will look like:

```
User logged in with data: Ali
User logged out
```

When the logout listener is removed, dispatching the logout event no longer produces any output.

## Concepts Demonstrated

- **Event-driven architecture**: Separation of concerns through event dispatching and handling.
- **TypeScript features**: Classes, type safety, and module imports/exports.
- **Listener management**: Adding, removing, and dispatching event listeners.
