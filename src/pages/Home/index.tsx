import React from 'react';
import styled from 'styled-components';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Header, SearchInput, Footer, Main } from '@/common/components';

export default function Home() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { value } = (e.target as HTMLElement).querySelector('input');
    const params = { query: value };
    navigate({
      pathname: '/searchresult',
      search: `?${createSearchParams(params)}&view=block`,
    });
  }

  const Catchphrase = styled.h2`
    margin-top: 10vh;
    margin-bottom: var(--space-xl);
    width: 100%;
    text-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  `;

  const HighLight = styled.span`
    margin-left: var(--space-sm);
    font-size: 52px;
    font-weight: 700;
    color: var(--purple-900);
  `;

  return (
    <>
      <Header />
      <Main>
        <Catchphrase style={{ fontSize: '2rem' }}>
          Record your <HighLight>Records!</HighLight>
        </Catchphrase>
        <SearchInput handleSubmit={handleSubmit} />
      </Main>
      <Footer />
    </>
  );
}
