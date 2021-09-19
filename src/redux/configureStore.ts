import {Action, AnyAction, createStore, Store, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {ApplicationStore, reducers} from './reducers';

const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/**
 * Configures Application store. Can have a initializing state: preloadedState.
 * @param {ApplicationStore} preloadedState state to initialize with.
 * @return {Store<ApplicationStore>} configured application store.
 */
export default function condfigureStore(preloadedState?: ApplicationStore): Store<ApplicationStore> {
  return createStore<ApplicationStore, Action<AnyAction>, unknown, unknown>(
      reducers(),
      preloadedState,
      composeEnhancer(applyMiddleware(thunk, logger)),
  );
};
