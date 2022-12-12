import { useNavigate, createSearchParams } from 'react-router-dom';

const useHandleSubmit = () => {
  const navigate = useNavigate();

  return function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = (e.target as HTMLElement).querySelector('input')
      ?.value as string;
    const params = { query: value };
    navigate({
      pathname: '/searchresult',
      search: `?${createSearchParams(params)}&view=block`,
    });
  };
};

export default useHandleSubmit;
