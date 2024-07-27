import './Letter.css';

interface Props {
  letter: string;
  onActivate: (key: string) => void;
  isActivated: boolean;
}

function useParser(text: string) {
  const [cityString, yearString] = text.split("_");
  return [cityString, yearString];
}

export const Letter = function (props: Props) {

  const [city, year] = useParser("Moscow_2024");
  console.log({city, year});

  return (
    <div className={"letter " + (props.isActivated ? 'activated' : '')} onClick={() => props.onActivate(props.letter)}>
      {props.letter}
    </div>
  );
}