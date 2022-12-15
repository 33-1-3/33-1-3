import { AddCollectionButton, TextInput } from '@/common/components';
import { Dispatch, SetStateAction, useState } from 'react';

export interface ToggleInputButtonProps {
  setCollectionList: Dispatch<
    SetStateAction<{ title: string; isChecked: boolean }[]>
  >;
}

const ToggleInputButton = ({ setCollectionList }: ToggleInputButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {isClicked ? (
        <TextInput
          width={432}
          height={48}
          color="var(--purple-900)"
          borderColor="var(--purple-900)"
          placeholder="생성할 콜렉션의 이름을 입력해주세요."
          required={true}
          validationTester={/^.{1,}$/}
          errorMsg="최소 한 글자 이상 입력해주세요."
          onKeyUp={(e) => {
            if (e.key !== 'Enter' && e.key !== 'Escape') return;
            if (e.key === 'Enter') {
              const target = e.target as HTMLInputElement;
              const title = target.value;
              if (title.trim() === '') {
                setIsClicked(false);
                return;
              }
              setCollectionList((state) => [
                ...state,
                { title: target.value, isChecked: false },
              ]);
            }
            setIsClicked(false);
          }}
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
};

export default ToggleInputButton;
