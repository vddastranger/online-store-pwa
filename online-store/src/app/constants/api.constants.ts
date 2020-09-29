import { A } from '@angular/cdk/keycodes';
import { Endpoints } from '../models/api.model';

export enum SkusEndpoints {
  GET_ALL = 'GetAll',
  GET_FILTERED = 'GetFiltered',
  GET_BY_ID = 'GetById/{id}'
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'UPDATE'
}


export const apiEndpoints: Endpoints = {
  getAll: {
    path: SkusEndpoints.GET_ALL,
    method: ApiMethods.GET,
  },
  getFiltered: {
    path: SkusEndpoints.GET_FILTERED,
    method: ApiMethods.POST,
  },
  getById: {
    path: SkusEndpoints.GET_BY_ID,
    method: ApiMethods.GET,
  }
};
