import { Fragment } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { PurchaseData } from '@/types/data';
import PURCHASE_INFO_NAME from '@/utils/constants/purchaseInfoName';

export interface WritableInfoProps {
  purchaseInfo: PurchaseData[];
  memo: string;
}

function WritableInfo({ purchaseInfo, memo }: WritableInfoProps) {
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
        <InfoContent dangerouslySetInnerHTML={{ __html: memo }}></InfoContent>
      </Memo>
    </WritableWrppaer>
  );
}

const WritableWrppaer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--space-xxl);
  width: 486px;
  margin: 64px 20px 96px;

  color: var(--gray-400);
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: var(--space-xs);
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;
    background-color: var(--purple-900);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const PurchaseInfo = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 84px);
  column-gap: 44px;
  row-gap: var(--space-bs);
  width: min-content;
  margin-top: auto;
  margin-left: auto;
  text-align: center;
`;

const InfoName = styled.span`
  font-size: var(--text-md);
  font-weight: 700;
`;

const InfoContent = styled.span`
  font-size: var(--text-bs);
  font-weight: 400;
`;

const Memo = styled.article`
  display: flex;
  flex-flow: column wrap;
  gap: var(--space-bs);
  width: 340px;
  margin-left: auto;
`;

export default WritableInfo;
