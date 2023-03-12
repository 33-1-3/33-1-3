import { ComponentProps, useState } from 'react';
import { useRecoilState } from 'recoil';
import { dialogContentState } from '@/recoil/globalState';
import { AddCollectionButton, TextInput } from '@/components';

function ToggleInputButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [dialogContent, setDialogContent] = useRecoilState(dialogContentState);

  // TODO: errorMsg가 표시되는 동안에는 Enter 입력 그냥 Return 처리
  const handleKeyUp: ComponentProps<'input'>['onKeyDown'] = (e) => {
    e.stopPropagation();

    if (e.key !== 'Enter' && e.key !== 'Escape') return;
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      const title = target.value;
      if (title.trim() === '') {
        setIsClicked(false);
        return;
      }
      setDialogContent({
        ...dialogContent,
        collectionList: [
          { id: '', title: target.value, isChecked: false },
          ...dialogContent.collectionList,
        ],
      });
    }
    setIsClicked(false);
  };

  return (
    <>
      {isClicked ? (
        <TextInput
          $width={432}
          $height={48}
          placeholder="생성할 콜렉션의 이름을 입력해주세요."
          required={true}
          validationTester={/^.{1,}$/}
          errorMsg="최소 한 글자 이상 입력해주세요."
          onKeyDown={handleKeyUp}
        />
      ) : (
        <AddCollectionButton
          size="small"
          onClick={() => {
            setIsClicked(true);
          }}
        />
      )}
    </>
  );
}

export default ToggleInputButton;
