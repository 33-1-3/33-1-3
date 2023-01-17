import { Fragment } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { PurchaseData } from '@/types/data';
import PURCHASE_INFO_NAME from '@/utils/constants/purchaseInfoName';

export interface WritableInfoProps {
  purchaseInfo: PurchaseData[];
  memoInfo: string;
}

function WritableInfo({ purchaseInfo, memoInfo }: WritableInfoProps) {
  return (
    <WritableWrppaer>
      <PurchaseInfo>
        {PURCHASE_INFO_NAME.map((name) => (
          <InfoName key={uuid()}>{name}</InfoName>
        ))}
        {purchaseInfo.map(({ date, price, state }) => (
          <Fragment key={uuid()}>
            <InfoContent>{date}</InfoContent>
            <InfoContent>{price}</InfoContent>
            <InfoContent>{state}</InfoContent>
          </Fragment>
        ))}
      </PurchaseInfo>
      <Memo>
        <InfoName>메모</InfoName>
        <InfoContent
          dangerouslySetInnerHTML={{ __html: memoInfo }}
        ></InfoContent>
      </Memo>
    </WritableWrppaer>
  );
}

const WritableWrppaer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--space-xxl);
  width: 36vw;
  min-width: 360px;
  max-width: 640px;
  margin: 200px 24px 96px;
  color: var(--gray-400);
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: var(--space-xs);
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;
    background-color: var(--purple-400);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const PurchaseInfo = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: stretch;
  row-gap: var(--space-bs);
  max-width: inherit;
  margin-top: auto;
  text-align: center;
`;

export const InfoName = styled.span`
  font-size: var(--text-md);
  font-weight: 700;
  word-break: keep-all;
`;

export const InfoContent = styled.span`
  font-size: var(--text-bs);
  font-weight: 400;
`;

const Memo = styled.article`
  display: flex;
  flex-flow: column wrap;
  gap: var(--space-bs);
  width: 36vw;
  min-width: 360px;
  max-width: 640px;
  margin-left: 3.2vw;
`;

export default WritableInfo;
