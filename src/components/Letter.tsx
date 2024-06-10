import {LetterModel} from '../models';

import './Letter.css';

interface Props {
  letter: string;
  onActivate: (key: string) => void;
  isActivated: boolean;
}


export const Letter = function (props: Props) {

  return (
    <div className={"letter " + (props.isActivated ? 'activated' : '')} onClick={() => props.onActivate(props.letter)}>
      {props.letter}
    </div>
  );
}