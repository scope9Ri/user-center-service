// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Auth from '../../../app/service/auth';
import Cache from '../../../app/service/cache';
import Mail from '../../../app/service/mail';
import Validate from '../../../app/service/validate';

declare module 'egg' {
  interface IService {
    auth: Auth;
    cache: Cache;
    mail: Mail;
    validate: Validate;
  }
}
