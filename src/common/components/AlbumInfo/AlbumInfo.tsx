import uuid from 'react-uuid';
import { TitleInfo, IconButton } from '@/common/components';
import DetailInfo from '../DetailInfo/DetailInfo';
import styled, { css } from 'styled-components';

import { useRecoilState } from 'recoil';
import { dialogState } from '@/recoil/globalState';
import { SelectCollectionForm } from '@/pages/Item/components';

import { ProcessedResult, ProcessedTracklist } from '@/types/data';

export interface ResultViewProps {
  view: 'block' | 'list' | 'detail' | 'myitem';
}
export interface AlbumInfoProps extends ResultViewProps {
  searchResult: ProcessedResult;
  tracklist?: ProcessedTracklist;
  page: 'all' | 'collection';
}

function AlbumInfo({
  searchResult,
  tracklist,
  page,
  view,
  ...props
}: AlbumInfoProps) {
  const buttonSize = view === 'block' ? 16 : 32;
  const buttonType = page === 'all' ? 'plus' : 'minus';
  const { titleInfo, detailInfo } = searchResult;

  const listInfo = detailInfo.filter(
    ({ infoName }) => infoName === 'Released' || infoName === 'Genre'
  );
  const newDetailInfo = tracklist ? [...detailInfo, tracklist] : detailInfo;

  const [_, setDialog] = useRecoilState(dialogState);

  return (
    <>
      <AlbumInfoWrapper view={view} {...props}>
        <TitleInfo
          title={titleInfo.title}
          artist={titleInfo.artist}
          view={view}
        />
        {view === 'list' && (
          <ListInfoWrapper>
            {listInfo.map(({ infoName, infoContent, isValid }) => (
              <DetailInfo
                key={uuid()}
                infoName={infoName}
                infoContent={infoContent}
                isValid={isValid}
              />
            ))}
          </ListInfoWrapper>
        )}
        <StyledIconButton
          width={buttonSize}
          height={buttonSize}
          iconType={buttonType}
          view={view}
          clickHandler={() =>
            page === 'all'
              ? setDialog({
                  isOpen: true,
                  width: 480,
                  height: 480,
                  title: 'Add Items',
                  children: (
                    <SelectCollectionForm
                      collectionList={[
                        {
                          isChecked: false,
                          title: '소장 중 💼',
                        },
                        {
                          isChecked: true,
                          title: '갖고 싶다... 🤤',
                        },
                        {
                          isChecked: false,
                          title: '❤K-POP❤',
                        },
                        {
                          isChecked: false,
                          title:
                            '엄청엄청긴타이트으으응으ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ일때',
                        },
                      ]}
                    />
                  ),
                  confirm: () => console.log('아이템 추가'),
                })
              : setDialog({
                  isOpen: true,
                  width: 480,
                  height: 200,
                  children: '아이템을 삭제하시겠습니까?',
                  confirm: () => console.log('아이템 삭제'),
                })
          }
        />
      </AlbumInfoWrapper>
      {view === 'detail' && (
        <DetailInfoWrapper>
          {newDetailInfo.map(({ infoName, infoContent, isValid }) => (
            <DetailInfo
              key={uuid()}
              infoName={infoName}
              infoContent={infoContent}
              isValid={isValid}
              // TODO: handler
            />
          ))}
        </DetailInfoWrapper>
      )}
    </>
  );
}

const WRAPPER_STYLE = {
  block: css`
    width: 150px;
    height: 76px;
    padding: var(--space-md) var(--space-xs);
  `,
  list: css`
    width: 618px;
    height: 152px;
  `,
  detail: css`
    width: 394px;
    height: 160px;
    padding: 36px var(--space-xs);
  `,
  myitem: css``,
};

const BUTTON_STYLE = {
  block: css`
    top: var(--space-lg);
    right: var(--space-xs);
  `,
  list: css`
    top: 60px;
    right: 0px;
  `,
  detail: css`
    top: 64px;
    right: var(--space-xs);
  `,
  myitem: css``,
};

const AlbumInfoWrapper = styled.div<ResultViewProps>`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  ${({ view }) => WRAPPER_STYLE[view]};
`;

const ListInfoWrapper = styled.dl`
  display: grid;
  grid-template-columns: 103px 483px;
  row-gap: 8px;
  width: 394px;
  margin-top: var(--space-lg);
`;

const DetailInfoWrapper = styled.dl`
  display: grid;
  grid-template-columns: 107px 267px;
  row-gap: var(--space-bs);
  width: 394px;
  padding: 0px var(--space-xs);
`;

const StyledIconButton = styled(IconButton)<ResultViewProps>`
  position: absolute;
  ${({ view }) => BUTTON_STYLE[view]};
`;

export default AlbumInfo;
