import React, { FC } from 'react';
import './index.scss';
import { App } from './App';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import * as stores from './Redux/Stores/Store';
import Demo from './_Demo/Demo';

// export const I_RENDER: React.FC = () => <React.StrictMode><Provider store={stores.store}><PersistGate persistor={stores.persistedStore}><App /></PersistGate></Provider></React.StrictMode>;

// export const I_RENDER: React.FC = () => <React.StrictMode><Provider store={stores.store}><App /></Provider></React.StrictMode>;

export const I_RENDER: FC = () => <React.StrictMode><Demo hi={"Hi"} name={"ashi"}/></React.StrictMode>;
