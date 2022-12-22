import uuid from 'react-uuid';
import { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { TitleInfo, IconButton, DetailInfo } from '@/common/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import {
  dialogContentState,
  dialogState,
  userState,
} from '@/recoil/globalState';
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

  const listInfo = detailInfo?.filter(
    ({ infoName }) => infoName === 'Released' || infoName === 'Genre'
  );
  const newDetailInfo = tracklist ? [...detailInfo, tracklist] : detailInfo;

  const { userid: collectionOwnerId } = useParams();

  const [, setDialogType] = useRecoilState(dialogState);
  const [dialogContent, setDialogContent] = useRecoilState(dialogContentState);
  const [userId] = useRecoilState(userState);

  const navigate = useNavigate();

  return useMemo(
    () => (
      <>
        <AlbumInfoWrapper view={view} {...props}>
          <TitleInfo
            title={titleInfo.title}
            artist={titleInfo.artist}
            view={view}
          />
          {view === 'list' && (
            <ListInfoWrapper>
              {listInfo?.map(({ infoName, infoContent, isValid }) => (
                <DetailInfo
                  key={uuid()}
                  infoName={infoName}
                  infoContent={infoContent}
                  isValid={isValid}
                />
              ))}
            </ListInfoWrapper>
          )}
          {(buttonType === 'plus' || userId === collectionOwnerId) && (
            <StyledIconButton
              width={buttonSize}
              height={buttonSize}
              iconType={buttonType}
              view={view}
              clickHandler={async (e: React.MouseEvent<HTMLButtonElement>) => {
                if (userId === null || userId === undefined) {
                  navigate('/signin');
                  return;
                }

                const releasedId = e.currentTarget.closest('.infoContainer')
                  ?.dataset?.releasedid as string;

                if (buttonType === 'plus') {
                  const { data: collectionList } = await axios.get(
                    `http://localhost:3313/collections/${userId}/${releasedId}`
                  );

                  setDialogContent({
                    ...dialogContent,
                    releasedId: releasedId,
                    collectionList: collectionList,
                  });

                  setDialogType('add-item');
                }

                if (buttonType === 'minus') {
                  setDialogContent({
                    ...dialogContent,
                    releasedId: releasedId,
                  });

                  setDialogType('delete-item');
                }
              }}
            />
          )}
        </AlbumInfoWrapper>
        {view === 'detail' && (
          <DetailInfoWrapper>
            {newDetailInfo?.map(({ infoName, infoContent, isValid }) => (
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
    ),
    [searchResult, tracklist, page, view]
  );
}

const WRAPPER_STYLE = {
  block: css`
    width: 150px;
    height: 76px;
    padding: var(--space-md) 4px;
  `,
  list: css`
    min-width: 470px;
    max-width: 618px;
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
    top: var(--space-bs);
    right: 4px;
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
  grid-template-columns: 103px 1fr;
  row-gap: 8px;
  min-width: 470px;
  max-width: 618px;
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
