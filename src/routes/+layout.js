export const prerender = true;
export const ssr = false;

import "../global.css";

export const load = ({ url }) => {
  const { pathname } = url;

  return {
    pathname,
  };
};
