import React, { useState, useEffect } from 'react';
import _ from 'lodash';

/* eslint-disable  @typescript-eslint/no-explicit-any */

export interface GeneData {
  id: string;
  features: Features;
  family: string;
  numStructures: number;
  numCompounds: number;
  description: string;
  fullName: string;
  shortName: string;
  image: string;
  publications: [year: string, count: number][];
}

export interface Features {
  isDruggable: boolean;
  isEnzyme: boolean;
}

/**
 * Function that performs a simple HTTP request to the provided URL and returns a JSON object.
 * @param url
 * @returns JSON
 */
export const useFetch = (url: string): GeneData[] => {
  const [data, setData] = useState<GeneData[]>([]);

  // equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      await fetch(url).then(async (response) => {
        const json = await response.json();
        const formattedJson = camelKeys(json);
        setData(formattedJson);
      });
    }
    fetchData();
  }, [url]);

  return data;
};

/** Recursive function that will attempt to convert the string value keys of a generic object
 * to camelcase.
 * @param obj Any object.
 * @returns The same object with camel case keys.
 */
const camelKeys = (obj: any): any => {
  // if the input is an array, return a map of that array with camelKeys applied
  if (Array.isArray(obj)) {
    return obj.map((key) => camelKeys(key));
    // otherwise check obj is an es6 Object type
  } else if (obj != null && obj.constructor === Object) {
    // and pipe camelcase keys with values into a new object
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [_.camelCase(key)]: camelKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};
