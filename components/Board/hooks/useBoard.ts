import {
  FAILURES_ALLOWED,
  GAME_STATUS,
  HiddenLetter,
} from "@/assets/data/FixedData";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";

const useBoard = (
  selectedSubject: string,
  finishGame: (status: GAME_STATUS, hiddenWord?: string) => void
) => {
  const { dataSet } = useFetchData(selectedSubject);
  const [hiddenWord, setHiddenWord] = useState<HiddenLetter[]>([]);
  const [failedAttempts, setFailedAttempts] = useState<number[]>([]);
  const [pressedLetters, setPressedLetters] = useState<string[]>([]);
  const [completeHiddenWord, setCompleteHiddenWord] = useState<string>("");

  useEffect(() => {
    const item = dataSet
      ? dataSet[Math.floor(Math.random() * dataSet?.length)]
      : null;
    if (item) {
      setCompleteHiddenWord(item);
      const splittedItem = [...item.toUpperCase().split("")];
      setHiddenWord(
        splittedItem.map((elem: string) => ({ letter: elem, hidden: true }))
      );
    }
  }, [dataSet]);

  useEffect(() => {
    if (failedAttempts.length >= FAILURES_ALLOWED) {
      finishGame(GAME_STATUS.FAILED, completeHiddenWord);
    }
  }, [failedAttempts]);

  useEffect(() => {
    const unHidden = hiddenWord.filter((elem) => elem.hidden === false);
    if (unHidden.length !== 0 && unHidden.length === hiddenWord.length) {
      finishGame(GAME_STATUS.SUCCESS, completeHiddenWord);
    }
  }, [hiddenWord]);

  const handleFinishGame = () => {
    setFailedAttempts([]);
    setHiddenWord([]);
    finishGame(GAME_STATUS.NONE);
  };

  const checkLetter = (letter: string) => {
    const ltrs = [...pressedLetters];
    ltrs.push(letter);
    setPressedLetters([...ltrs]);
    const foundIndexes = hiddenWord
      .map((elem, index) => elem.letter === letter && index)
      .filter((elem) => elem !== false);
    if (foundIndexes.length > 0) {
      foundIndexes.forEach((elem) => {
        const word = [...hiddenWord];
        const elemIndex = Number(elem);
        word[elemIndex].hidden = false;
        setHiddenWord([...word]);
      });
    } else {
      const failed = [...failedAttempts];
      failed.push(failedAttempts.length);
      setFailedAttempts([...failed]);
    }
  };

  return {
    hiddenWord,
    failedAttempts,
    pressedLetters,
    completeHiddenWord,
    handleFinishGame,
    checkLetter,
  };
};

export default useBoard;
