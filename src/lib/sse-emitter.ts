import { EventEmitter } from 'events';

const globalAny: any = global;

if (!globalAny.cartEventEmitter) {
  globalAny.cartEventEmitter = new EventEmitter();
  globalAny.cartEventEmitter.setMaxListeners(100);
}

export const cartEventEmitter = globalAny.cartEventEmitter as EventEmitter;
