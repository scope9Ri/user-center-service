// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import ExtendObject from '../../../app/extend/context';
declare module 'egg' {
  interface Context {
    error: typeof ExtendObject.error;
    abort: typeof ExtendObject.abort;
    validate: typeof ExtendObject.validate;
  }
}