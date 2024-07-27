import './Letter.css';

interface Props {
  letter: string;
  onActivate: (key: string) => void;
  isActivated: boolean;
}

function useParser(text: string) {
  const number = text[1]; //1
  const [cityString, yearString] = text.split("_");
  return [cityString, yearString];
}

export const Letter = function (props: Props) {

  const [firstLetter, number, lastLetter] = useParser("К161СА");

  return (
    <div className={"letter " + (props.isActivated ? 'activated' : '')} onClick={() => props.onActivate(props.letter)}>
      {props.letter}
    </div>
  );
}