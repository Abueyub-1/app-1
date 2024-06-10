import { useState } from 'react';

import { Button, Input, InputAdornment } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import './Transcript.css';


export const Transcript = function () {

  const [isArabic, setIsArabic] = useState(false);
  const [text, setText] = useState('');

  const onSwapLanguage = () => {
    setIsArabic(!isArabic);
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  // !isArabic

  // languageClassname = isArabic ? "arabic" : "russian"

  let languageClassname = 'russian';
  if (isArabic) {
    languageClassname = "arabic";
  }

  // السلام عليكم
  for (var i = 0; i<10; i++) {
    console.log('awdawd' + Math.random()*100);
  }



  // let buffer = [];
  // let predictions: string[] = [];

  // let a = 'السلام عليكم';
  // let i = 0;

  // function getByMaxLengthInArray(list: ) {
    
  //   .sort((itemA:string, itemB: string) => { 
  //     return itemA.length - itemB.length;
  //   }).pop()
  // }

  // // أمير
  // while (i < a.length) {
  //   // buffer <= ['ا', 'ل']
  //   // predict   ['Аль', 'А']
  //   const letter = a[i++];
  //   buffer.push(letter);

  //   if (buffer.length > 1) {
  //     const solve = ;
  //     console.log(solve);
  //   }
  // }
  
  // predictions.sort()





  return (
    <div className={"transcript " + languageClassname}>
      <Input className="transcript-input" inputProps={{style: { textAlign: 'center' }}} onChange={onInputChange} />
      <Button className="transcript-button" onClick={onSwapLanguage}><SwapVertIcon/></Button>
      <span className="transcript-result">{text}</span>
    </div>
  );
}