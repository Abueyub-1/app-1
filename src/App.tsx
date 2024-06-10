import React, {useState} from 'react';
import './App.css';

import {LetterModel} from './models';
import {Letter} from './components/Letter';

const LETTERS: LetterModel[] = [
  { name: "ألف", value:'ا' },
  { name: "باء", value:'ب' },
  { name: "تاء", value:'ت' },
  { name: "ثاء", value:'ث' },
  { name: "جيم", value:'ج' },
  { name: "حاء", value:'ح' },
  { name: "خاء", value:'خ' },
  { name: "دال", value:'د' },
  { name: "ذال", value:'ذ' },
  { name: "راء", value:'ر' },
  { name: "زاي", value:'ز' },
  { name: "سين", value:'س' },
  { name: "شين", value:'ش' },
  { name: "صاد", value:'ص' },
  { name: "ضاد", value:'ض' },
  { name: "طاء", value:'ط' },
  { name: "ظاء", value:'ظ' },
  { name: "عين", value:'ع' },
  { name: "غين", value:'غ' },
  { name: "فاء", value:'ف' },
  { name: "قاف", value:'ق' },
  { name: "كاف", value:'ك' },
  { name: "لام", value:'ل' },
  { name: "ميم", value:'م' },
  { name: "نون", value:'ن' },
  { name: "هاء", value:'ه' },
  { name: "واو", value:'و' },
  { name: "ياء", value:'ي' },
];

function App() {

  const [letters, setLetters] = useState<LetterModel[]>([]);
  const [active, setActive] = useState<string>();

  return (
    <div className="App">
      <div className="alphabet">
        {LETTERS.map((letter) => (<Letter key={letter.value} letter={letter.value} onActivate={setActive} isActivated={letter.value === active} />))}
      </div>
    </div>
  );
}

export default App;
