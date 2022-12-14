import { useNavigate, createSearchParams } from 'react-router-dom';

const useHandleSubmit = () => {
  const navigate = useNavigate();

  return function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = (e.target as HTMLElement).querySelector('input')
      ?.value as string;
    const param = { query: value };

    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');

    navigate({
      pathname: '/searchresult',
      search: `?${createSearchParams(param)}&view=${
        view === 'list' ? 'list' : 'block'
      }`,
    });
  };
};

export default useHandleSubmit;
