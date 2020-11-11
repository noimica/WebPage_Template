import useTitle from './useTitle';

const NoMatch = () => {
  useTitle('404 Not Found');
  return (
    <h1>404</h1>
  );
};
export default NoMatch;