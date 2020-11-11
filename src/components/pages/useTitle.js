import { useEffect } from 'react';

function isFunction(obj, notArrow) {
    return toString.call(obj) === '[object Function]' && (!notArrow || 'prototype' in obj);
}

function useTitle(titleOrFn, ...deps) {
    useEffect(
      () => {
        document.title = isFunction(titleOrFn) ? titleOrFn() : titleOrFn;
      },
      [...deps]
    );
}

export default useTitle;