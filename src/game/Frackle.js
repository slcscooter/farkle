import React from "react";
import { useState } from "react";
import { Dice } from "./components/Dice";
import { ScoringRulesRefined } from "./components/ScoringRules";
import {
  buttonStyle,
  flexCol,
  flexRow,
  buttonStyleDisabledSM,
  buttonStyleSM,
  diceImage,
  centeredFlexCol,
} from "./game.css";
import {
  rollImage,
  rollImage1,
  rollImage2,
  rollImage3,
  rollImage4,
  rollImage5,
  rollImage6,
} from "./refs/imageRefs";

export function FrackleGameBoard() {
  /**
   * Dice Actions
   */

  // Dice 1
  const [heldDice1, setHeldDice1] = useState(false);
  const [diceValue1, setDiceValue1] = useState("Roll");
  const [rolled1, setRolled1] = useState(false);
  const [imageSource1, setImageSource1] = useState(rollImage);
  const [altSource1, setAltSource1] = useState("Dice 1 value is Roll");
  const [diceScore1, setDiceScore1] = useState(diceValue1);
  const [heldDiceRoll1, setHeldDiceRoll1] = useState(undefined);

  function handleHoldDice1() {
    setHeldDice1(true);
    setHeldDiceRoll1(rollCount);
  }

  function handleUnHoldDice1() {
    setHeldDice1(false);
    setHeldDiceRoll1(undefined);
  }

  // Dice 2
  const [heldDice2, setHeldDice2] = useState(false);
  const [diceValue2, setDiceValue2] = useState("Roll");
  const [rolled2, setRolled2] = useState(false);
  const [imageSource2, setImageSource2] = useState(rollImage);
  const [altSource2, setAltSource2] = useState("Dice 2 value is Roll");
  const [diceScore2, setDiceScore2] = useState(diceValue2);
  const [heldDiceRoll2, setHeldDiceRoll2] = useState(undefined);

  function handleHoldDice2() {
    setHeldDice2(true);
    setHeldDiceRoll2(rollCount);
  }

  function handleUnHoldDice2() {
    setHeldDice2(false);
    setHeldDiceRoll2(undefined);
  }

  // Dice 3
  const [heldDice3, setHeldDice3] = useState(false);
  const [diceValue3, setDiceValue3] = useState("Roll");
  const [rolled3, setRolled3] = useState(false);
  const [imageSource3, setImageSource3] = useState(rollImage);
  const [altSource3, setAltSource3] = useState("Dice 3 value is Roll");
  const [diceScore3, setDiceScore3] = useState(diceValue3);
  const [heldDiceRoll3, setHeldDiceRoll3] = useState(undefined);

  function handleHoldDice3() {
    setHeldDice3(true);
    setHeldDiceRoll3(rollCount);
  }

  function handleUnHoldDice3() {
    setHeldDice3(false);
    setHeldDiceRoll3(undefined);
  }

  // Dice 4
  const [heldDice4, setHeldDice4] = useState(false);
  const [diceValue4, setDiceValue4] = useState("Roll");
  const [rolled4, setRolled4] = useState(false);
  const [imageSource4, setImageSource4] = useState(rollImage);
  const [altSource4, setAltSource4] = useState("Dice 4 value is Roll");
  const [diceScore4, setDiceScore4] = useState(diceValue4);
  const [heldDiceRoll4, setHeldDiceRoll4] = useState(undefined);

  function handleHoldDice4() {
    setHeldDice4(true);
    setHeldDiceRoll4(rollCount);
  }

  function handleUnHoldDice4() {
    setHeldDice4(false);
    setHeldDiceRoll4(undefined);
  }

  // Dice 5
  const [heldDice5, setHeldDice5] = useState(false);
  const [diceValue5, setDiceValue5] = useState("Roll");
  const [rolled5, setRolled5] = useState(false);
  const [imageSource5, setImageSource5] = useState(rollImage);
  const [altSource5, setAltSource5] = useState("Dice 5 value is Roll");
  const [diceScore5, setDiceScore5] = useState(diceValue5);
  const [heldDiceRoll5, setHeldDiceRoll5] = useState(undefined);

  function handleHoldDice5() {
    setHeldDice5(true);
    setHeldDiceRoll5(rollCount);
  }

  function handleUnHoldDice5() {
    setHeldDice5(false);
    setHeldDiceRoll5(undefined);
  }

  // Dice 6
  const [heldDice6, setHeldDice6] = useState(false);
  const [diceValue6, setDiceValue6] = useState("Roll");
  const [rolled6, setRolled6] = useState(false);
  const [imageSource6, setImageSource6] = useState(rollImage);
  const [altSource6, setAltSource6] = useState("Dice 6 value is Roll");
  const [diceScore6, setDiceScore6] = useState(diceValue6);
  const [heldDiceRoll6, setHeldDiceRoll6] = useState(undefined);

  function handleHoldDice6() {
    setHeldDice6(true);
    setHeldDiceRoll6(rollCount);
  }

  function handleUnHoldDice6() {
    setHeldDice6(false);
    setHeldDiceRoll6(rollCount);
  }

  /**
   * Turn Actions
   */

  function rollAllAvailableDice() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const roll1 = getRandomInt(6) + 1;
    const roll2 = getRandomInt(6) + 1;
    const roll3 = getRandomInt(6) + 1;
    const roll4 = getRandomInt(6) + 1;
    const roll5 = getRandomInt(6) + 1;
    const roll6 = getRandomInt(6) + 1;

    function srcGen(roll) {
      if (roll === "Roll") {
        return rollImage;
      } else if (roll === 6) {
        return rollImage6;
      } else if (roll === 5) {
        return rollImage5;
      } else if (roll === 4) {
        return rollImage4;
      } else if (roll === 3) {
        return rollImage3;
      } else if (roll === 2) {
        return rollImage2;
      } else if (roll === 1) {
        return rollImage1;
      }
    }

    if (heldDice1 === false) {
      setDiceValue1(roll1);
      setDiceScore1(roll1);
      setRolled1(true);
      setAltSource1(`Dice 1 value is ${roll1}`);
      setImageSource1(srcGen(roll1));
    }

    if (heldDice2 === false) {
      setDiceValue2(roll2);
      setDiceScore2(roll2);
      setRolled2(true);
      setAltSource2(`Dice 2 value is ${roll2}`);
      setImageSource2(srcGen(roll2));
    }

    if (heldDice3 === false) {
      setDiceValue3(roll3);
      setDiceScore3(roll3);
      setRolled3(true);
      setAltSource3(`Dice 3 value is ${roll3}`);
      setImageSource3(srcGen(roll3));
    }

    if (heldDice4 === false) {
      setDiceValue4(roll4);
      setDiceScore4(roll4);
      setRolled4(true);
      setAltSource4(`Dice 4 value is ${roll4}`);
      setImageSource4(srcGen(roll4));
    }

    if (heldDice5 === false) {
      setDiceValue5(roll5);
      setDiceScore5(roll5);
      setRolled5(true);
      setAltSource5(`Dice 5 value is ${roll5}`);
      setImageSource5(srcGen(roll5));
    }

    if (heldDice6 === false) {
      setDiceValue6(roll6);
      setDiceScore6(roll6);
      setRolled6(true);
      setAltSource6(`Dice 6 value is ${roll6}`);
      setImageSource6(srcGen(roll6));
    }
  }

  /**
   * Game Level Actions
   */

  const [hideRules, setHideRules] = useState(true);

  function handleHideRules() {
    setHideRules(true);
  }

  function handleShowRules() {
    setHideRules(false);
  }

  const [pauseGame, setPauseGame] = useState(false);

  function handlePauseGame() {
    setPauseGame(true);
  }

  function handleUnpauseGame() {
    setPauseGame(false);
  }

  const [selectGame, setSelectGame] = useState("Solo");

  function handleSelect1v1() {
    setSelectGame("1v1");
  }

  function handleSelectSolo() {
    setSelectGame("Solo");
  }

  function handleResetGame() {
    setHeldDice1(false);
    setDiceValue1("Roll");
    setRolled1(false);
    setImageSource1(rollImage);
    setAltSource1("Dice 1 value is Roll");
    setPlayer("Player 1");
    setTurnCount(1);
    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(1);
    setPlayer1Score(0);
    setDiceScore1(0);
    setTurnScore(0);
    setHeldDiceRoll1(undefined);
    setHeldDice2(false);
    setDiceValue2("Roll");
    setRolled2(false);
    setImageSource2(rollImage);
    setAltSource2("Dice 2 value is Roll");
    setDiceScore2(0);
    setHeldDiceRoll2(undefined);
    setHeldDice3(false);
    setDiceValue3("Roll");
    setRolled3(false);
    setImageSource3(rollImage);
    setAltSource3("Dice 3 value is Roll");
    setDiceScore3(0);
    setHeldDiceRoll3(undefined);
    setHeldDice4(false);
    setDiceValue4("Roll");
    setRolled4(false);
    setImageSource4(rollImage);
    setAltSource4("Dice 4 value is Roll");
    setDiceScore4(0);
    setHeldDiceRoll4(undefined);
    setHeldDice5(false);
    setDiceValue5("Roll");
    setRolled5(false);
    setImageSource5(rollImage);
    setAltSource5("Dice 5 value is Roll");
    setDiceScore5(0);
    setHeldDiceRoll5(undefined);
    setHeldDice6(false);
    setDiceValue6("Roll");
    setRolled6(false);
    setImageSource6(rollImage);
    setAltSource6("Dice 6 value is Roll");
    setDiceScore6(0);
    setHeldDiceRoll6(undefined);
    setHeldDiceCount(0);

    if (selectGame === "1v1") {
      setPlayer2Score(0);
    }
  }

  const [player, setPlayer] = useState("Player 1");
  const [turnCount, setTurnCount] = useState(1);
  const [lockDice, setLockDice] = useState(false);
  const [nextRollLocked, setNextRollLocked] = useState(true);
  const [rollCount, setRollCount] = useState(1);
  const [turnScore, setTurnScore] = useState(0);
  const [heldDiceCount, setHeldDiceCount] = useState(0);

  const currentHeldDiceCount = () => {
    const dice1 = heldDice1 === true ? 1 : 0;
    const dice2 = heldDice2 === true ? 1 : 0;
    const dice3 = heldDice3 === true ? 1 : 0;
    const dice4 = heldDice4 === true ? 1 : 0;
    const dice5 = heldDice5 === true ? 1 : 0;
    const dice6 = heldDice6 === true ? 1 : 0;

    return dice1 + dice2 + dice3 + dice4 + dice5 + dice6;
  };

  function handleLockDice() {
    setLockDice(true);
    setNextRollLocked(false);
  }

  function handleUnlockDice() {
    setLockDice(false);
    setNextRollLocked(true);
  }

  function handleNextRoll() {
    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(rollCount + 1);
    setTurnScore(turnScore + rollScore);
    setHeldDiceCount(currentHeldDiceCount());

    if (!heldDice1) {
      setRolled1(false);
      setDiceValue1("Roll");
      setImageSource1(rollImage);
      setAltSource1("Dice 1 value is Roll");
      setDiceScore1(0);
    }

    if (!heldDice2) {
      setRolled2(false);
      setDiceValue2("Roll");
      setImageSource2(rollImage);
      setAltSource2("Dice 2 value is Roll");
      setDiceScore2(0);
    }

    if (!heldDice3) {
      setRolled3(false);
      setDiceValue3("Roll");
      setImageSource3(rollImage);
      setAltSource3("Dice 3 value is Roll");
      setDiceScore3(0);
    }

    if (!heldDice4) {
      setRolled4(false);
      setDiceValue4("Roll");
      setImageSource4(rollImage);
      setAltSource4("Dice 4 value is Roll");
      setDiceScore4(0);
    }

    if (!heldDice5) {
      setRolled5(false);
      setDiceValue5("Roll");
      setImageSource5(rollImage);
      setAltSource5("Dice 5 value is Roll");
      setDiceScore5(0);
    }

    if (!heldDice6) {
      setRolled6(false);
      setDiceValue6("Roll");
      setImageSource6(rollImage);
      setAltSource6("Dice 6 value is Roll");
      setDiceScore6(0);
    }
  }

  function handleBankRoll() {
    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(rollCount + 1);
    setTurnScore(turnScore + rollScore);
    setRolled1(false);
    setDiceValue1("Roll");
    setImageSource1(rollImage);
    setAltSource1("Dice 1 value is Roll");
    setDiceScore1(0);
    setHeldDice1(false);
    setHeldDiceRoll1(undefined);
    setRolled2(false);
    setDiceValue2("Roll");
    setImageSource2(rollImage);
    setAltSource2("Dice 2 value is Roll");
    setDiceScore2(0);
    setHeldDice2(false);
    setHeldDiceRoll2(undefined);
    setRolled3(false);
    setDiceValue3("Roll");
    setImageSource3(rollImage);
    setAltSource3("Dice 3 value is Roll");
    setDiceScore3(0);
    setHeldDice3(false);
    setHeldDiceRoll3(undefined);
    setRolled4(false);
    setDiceValue4("Roll");
    setImageSource4(rollImage);
    setAltSource4("Dice 4 value is Roll");
    setDiceScore4(0);
    setHeldDice4(false);
    setHeldDiceRoll4(undefined);
    setRolled5(false);
    setDiceValue5("Roll");
    setImageSource5(rollImage);
    setAltSource5("Dice 5 value is Roll");
    setDiceScore5(0);
    setHeldDice5(false);
    setHeldDiceRoll5(undefined);
    setRolled6(false);
    setDiceValue6("Roll");
    setImageSource6(rollImage);
    setAltSource6("Dice 6 value is Roll");
    setDiceScore6(0);
    setHeldDice6(false);
    setHeldDiceRoll6(undefined);
    setHeldDiceCount(0);
  }

  function handleEndTurn() {
    if (selectGame === "1v1") {
      if (player === "Player 1") {
        setPlayer("Player 2");
        setPlayer1Score(player1Score + turnScore + rollScore);
      }

      if (player === "Player 2") {
        setPlayer("Player 1");
        setPlayer2Score(player2Score + turnScore + rollScore);
        setTurnCount(turnCount + 1);
      }
    }

    if (selectGame === "Solo") {
      setPlayer1Score(player1Score + turnScore + rollScore);
      setTurnCount(turnCount + 1);
    }

    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(1);
    setRolled1(false);
    setHeldDice1(false);
    setDiceValue1("Roll");
    setHeldDiceRoll1(undefined);
    setImageSource1(rollImage);
    setAltSource1("Dice 1 value is Roll");
    setDiceScore1(0);
    setRolled2(false);
    setHeldDice2(false);
    setDiceValue2("Roll");
    setHeldDiceRoll2(undefined);
    setImageSource2(rollImage);
    setAltSource2("Dice 2 value is Roll");
    setDiceScore2(0);
    setRolled3(false);
    setHeldDice3(false);
    setDiceValue3("Roll");
    setHeldDiceRoll3(undefined);
    setImageSource3(rollImage);
    setAltSource3("Dice 3 value is Roll");
    setDiceScore3(0);
    setRolled4(false);
    setHeldDice4(false);
    setDiceValue4("Roll");
    setHeldDiceRoll4(undefined);
    setImageSource4(rollImage);
    setAltSource4("Dice 4 value is Roll");
    setDiceScore4(0);
    setRolled5(false);
    setHeldDice5(false);
    setDiceValue5("Roll");
    setHeldDiceRoll5(undefined);
    setImageSource5(rollImage);
    setAltSource5("Dice 5 value is Roll");
    setDiceScore5(0);
    setRolled6(false);
    setHeldDice6(false);
    setDiceValue6("Roll");
    setHeldDiceRoll6(undefined);
    setImageSource6(rollImage);
    setAltSource6("Dice 6 value is Roll");
    setDiceScore6(0);
    setTurnScore(0);
    setHeldDiceCount(0);
  }

  function handleFrackle() {
    if (selectGame === "1v1") {
      if (player === "Player 1") {
        setPlayer("Player 2");
      }

      if (player === "Player 2") {
        setPlayer("Player 1");
        setTurnCount(turnCount + 1);
      }
    }

    if (selectGame === "Solo") {
      setTurnCount(turnCount + 1);
    }

    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(1);
    setRolled1(false);
    setHeldDice1(false);
    setDiceValue1("Roll");
    setHeldDiceRoll1(undefined);
    setImageSource1(rollImage);
    setAltSource1("Dice 1 value is Roll");
    setDiceScore1(0);
    setRolled2(false);
    setHeldDice2(false);
    setDiceValue2("Roll");
    setHeldDiceRoll2(undefined);
    setImageSource2(rollImage);
    setAltSource2("Dice 2 value is Roll");
    setDiceScore2(0);
    setRolled3(false);
    setHeldDice3(false);
    setDiceValue3("Roll");
    setHeldDiceRoll3(undefined);
    setImageSource3(rollImage);
    setAltSource3("Dice 3 value is Roll");
    setDiceScore3(0);
    setRolled4(false);
    setHeldDice4(false);
    setDiceValue4("Roll");
    setHeldDiceRoll4(undefined);
    setImageSource4(rollImage);
    setAltSource4("Dice 4 value is Roll");
    setDiceScore4(0);
    setRolled5(false);
    setHeldDice5(false);
    setDiceValue5("Roll");
    setHeldDiceRoll5(undefined);
    setImageSource5(rollImage);
    setAltSource5("Dice 5 value is Roll");
    setDiceScore5(0);
    setRolled6(false);
    setHeldDice6(false);
    setDiceValue6("Roll");
    setHeldDiceRoll6(undefined);
    setImageSource6(rollImage);
    setAltSource6("Dice 6 value is Roll");
    setDiceScore6(0);
    setTurnScore(0);
    setHeldDiceCount(0);
  }

  /**
   * Banked Dice Functions
   */

  const dice1 = heldDice1 === true ? diceScore1 : undefined;
  const dice2 = heldDice2 === true ? diceScore2 : undefined;
  const dice3 = heldDice3 === true ? diceScore3 : undefined;
  const dice4 = heldDice4 === true ? diceScore4 : undefined;
  const dice5 = heldDice5 === true ? diceScore5 : undefined;
  const dice6 = heldDice6 === true ? diceScore6 : undefined;
  const updateDice1 = heldDiceRoll1 < rollCount ? undefined : dice1;
  const updateDice2 = heldDiceRoll2 < rollCount ? undefined : dice2;
  const updateDice3 = heldDiceRoll3 < rollCount ? undefined : dice3;
  const updateDice4 = heldDiceRoll4 < rollCount ? undefined : dice4;
  const updateDice5 = heldDiceRoll5 < rollCount ? undefined : dice5;
  const updateDice6 = heldDiceRoll6 < rollCount ? undefined : dice6;

  const bankedDiceList = [];

  if (updateDice1 !== undefined) {
    bankedDiceList.push(dice1);
  }
  if (updateDice2 !== undefined) {
    bankedDiceList.push(dice2);
  }
  if (updateDice3 !== undefined) {
    bankedDiceList.push(dice3);
  }
  if (updateDice4 !== undefined) {
    bankedDiceList.push(dice4);
  }
  if (updateDice5 !== undefined) {
    bankedDiceList.push(dice5);
  }
  if (updateDice6 !== undefined) {
    bankedDiceList.push(dice6);
  }

  const rollScore = scoreMap();

  function scoreMap() {
    const bankedDiceCount = bankedDiceList.length;

    // dx is the number of x rolled
    const d1 = bankedDiceList.filter((x) => x === 1).length;
    const d2 = bankedDiceList.filter((x) => x === 2).length;
    const d3 = bankedDiceList.filter((x) => x === 3).length;
    const d4 = bankedDiceList.filter((x) => x === 4).length;
    const d5 = bankedDiceList.filter((x) => x === 5).length;
    const d6 = bankedDiceList.filter((x) => x === 6).length;

    if (bankedDiceCount === 6) {
      // [x,x,x,x,x,x] = 3000 (example: [4,4,4,4,4,4] = 3000)
      if (
        d1 === 6 ||
        d2 === 6 ||
        d3 === 6 ||
        d4 === 6 ||
        d5 === 6 ||
        d6 === 6
      ) {
        if (d1 === 6) {
          return 5000;
        }
        return 3000;
      }

      // [1,2,3,4,5,6] = 1500 (example: [3,6,2,4,5,1] = 1500)
      if (
        d1 === 1 &&
        d2 === 1 &&
        d3 === 1 &&
        d4 === 1 &&
        d5 === 1 &&
        d6 === 1
      ) {
        return 1500;
      }

      // [x,x,y,y,z,z] = 1500 (example: [3,1,4,4,1,3] = 1500)
      if (
        (d1 === 2 ||
          d2 === 2 ||
          d3 === 2 ||
          d4 === 2 ||
          d5 === 2 ||
          d6 === 2) &&
        (d1 === 2 ||
          d2 === 2 ||
          d3 === 2 ||
          d4 === 2 ||
          d5 === 2 ||
          d6 === 2) &&
        (d1 === 2 || d2 === 2 || d3 === 2 || d4 === 2 || d5 === 2 || d6 === 2)
      ) {
        return 1500;
      }

      // [x,x,y,y,y,y] = 1500 (example: [4,4,4,4,1,1] = 1500)
      if (
        (d1 === 2 ||
          d2 === 2 ||
          d3 === 2 ||
          d4 === 2 ||
          d5 === 2 ||
          d6 === 2) &&
        (d1 === 4 || d2 === 4 || d3 === 4 || d4 === 4 || d5 === 4 || d6 === 4)
      ) {
        if (d1 === 4) {
          return 2500;
        }
        return 1500;
      }

      // [x,x,x,y,y,y] = 2500 (example: [4,4,4,1,1,1] = 2500)
      if (
        (d1 === 3 ||
          d2 === 3 ||
          d3 === 3 ||
          d4 === 3 ||
          d5 === 3 ||
          d6 === 3) &&
        (d1 === 3 || d2 === 3 || d3 === 3 || d4 === 3 || d5 === 3 || d6 === 3)
      ) {
        if (d1 === 3) {
          return 3500;
        }
        return 2500;
      }

      // [x,x,x,x,x,1] = 2100 (example: [6,6,6,6,1,6] = 2100) note that x !== 1
      if (
        (d2 === 5 || d3 === 5 || d4 === 5 || d5 === 5 || d6 === 5) &&
        d1 === 1
      ) {
        return 2100;
      }

      // [x,x,x,x,x,5] = 2050 (example: [6,6,6,6,5,6] = 2050) note that x !== 5
      if (
        (d1 === 5 || d2 === 5 || d3 === 5 || d4 === 5 || d6 === 5) &&
        d5 === 1
      ) {
        if (d1 === 5) {
          return 3050;
        }
        return 2050;
      }

      // [x,x,x,x,1,5] = 1150 (example: [6,1,6,6,5,6] = 1150) note that x !== 5 && x !== 1
      if (
        (d2 === 4 || d3 === 4 || d4 === 4 || d6 === 4) &&
        d1 === 1 &&
        d5 === 1
      ) {
        return 1150;
      }

      // [x,x,x,1,1,5] = [xxx] + 250 (example: [2,2,2,1,1,5] = 200 + 250 = 450) note x !== 1 && x !==5
      if (
        (d2 === 3 || d3 === 3 || d4 === 3 || d6 === 3) &&
        d1 === 2 &&
        d5 === 1
      ) {
        if (d2 === 3) {
          return 450;
        }
        if (d3 === 3) {
          return 550;
        }
        if (d4 === 3) {
          return 650;
        }
        if (d6 === 3) {
          return 850;
        }
      }

      // [x,x,x,1,5,5] = [xxx] + 200 (example: [2,2,2,1,5,5] = 200 + 200 = 400) note x !== 1 && x !==5
      if (
        (d2 === 3 || d3 === 3 || d4 === 3 || d6 === 3) &&
        d1 === 1 &&
        d5 === 2
      ) {
        if (d2 === 3) {
          return 400;
        }
        if (d3 === 3) {
          return 500;
        }
        if (d4 === 3) {
          return 600;
        }
        if (d6 === 3) {
          return 800;
        }
      }

      // [1,2,3,4,5,5] or [2,3,4,5,6,5] = 1050
      if (
        (d1 === 1 && d2 === 1 && d3 === 1 && d4 === 1 && d5 === 2) ||
        (d2 === 1 && d3 === 1 && d4 === 1 && d5 === 2 && d6 === 1)
      ) {
        return 1050;
      }

      // [1,2,3,4,5,1] = 1100
      if (d1 === 2 && d2 === 1 && d3 === 1 && d4 === 1 && d5 === 1) {
        return 1100;
      }
    }

    if (bankedDiceCount === 5) {
      // [x,x,x,x,x] = 2000 (example: [6,6,6,6,3,6] = 2000)
      if (
        d1 === 5 ||
        d2 === 5 ||
        d3 === 5 ||
        d4 === 5 ||
        d5 === 5 ||
        d6 === 5
      ) {
        if (d1 === 5) {
          return 3000;
        }
        return 2000;
      }

      // [1,2,3,4,5] or [2,3,4,5,6] = 1000
      if (
        (d1 === 1 && d2 === 1 && d3 === 1 && d4 === 1 && d5 === 1) ||
        (d2 === 1 && d3 === 1 && d4 === 1 && d5 === 1 && d6 === 1)
      ) {
        return 1000;
      }

      // [x,x,x,x,1] = 1100 (example: [6,6,6,1,6] = 1100) note that x !== 1
      if (
        (d2 === 4 || d3 === 4 || d4 === 4 || d5 === 4 || d6 === 4) &&
        d1 === 1
      ) {
        return 1100;
      }

      // [x,x,x,x,5] = 1050 (example: [6,6,6,5,6] = 1050) note that x !== 5
      if (
        (d1 === 4 || d2 === 4 || d3 === 4 || d4 === 4 || d6 === 4) &&
        d5 === 1
      ) {
        if (d1 === 4) {
          return 2050;
        }
        return 1050;
      }

      // [x,x,x,1,1] = [xxx] + 200 (example: [2,2,2,1,1] = 200 + 100 = 300) note x !== 1
      if (
        (d2 === 3 || d3 === 3 || d4 === 3 || d5 === 3 || d6 === 3) &&
        d1 === 2
      ) {
        if (d2 === 3) {
          return 400;
        }
        if (d3 === 3) {
          return 500;
        }
        if (d4 === 3) {
          return 600;
        }
        if (d5 === 3) {
          return 700;
        }
        if (d6 === 3) {
          return 800;
        }
      }

      // [x,x,x,1,5] = [xxx] + 150 (example: [2,2,2,1] = 200 + 150 = 350) note x !== 1 && x !== 5
      if (
        (d2 === 3 || d3 === 3 || d4 === 3 || d6 === 3) &&
        d1 === 1 &&
        d5 === 1
      ) {
        if (d2 === 3) {
          return 350;
        }
        if (d3 === 3) {
          return 450;
        }
        if (d4 === 3) {
          return 550;
        }
        if (d6 === 3) {
          return 750;
        }
      }

      // [x,x,x,5,5] = [xxx] + 200 (example: [2,2,2,5,5] = 200 + 100 = 300) note x !== 1
      if (
        (d1 === 3 || d2 === 3 || d3 === 3 || d4 === 3 || d6 === 3) &&
        d5 === 2
      ) {
        if (d1 === 3) {
          return 1100;
        }
        if (d2 === 3) {
          return 300;
        }
        if (d3 === 3) {
          return 400;
        }
        if (d4 === 3) {
          return 500;
        }
        if (d6 === 3) {
          return 700;
        }
      }
    }

    if (bankedDiceCount === 4) {
      // [x,x,x,x] = 1000 (example: [2,2,4,2,5,2] = 1000)
      if (
        d1 === 4 ||
        d2 === 4 ||
        d3 === 4 ||
        d4 === 4 ||
        d5 === 4 ||
        d6 === 4
      ) {
        if (d1 === 4) {
          return 2000;
        }
        return 1000;
      }

      // [x,x,x,1] = [xxx] + 100 (example: [2,2,2,1] = 200 + 100 = 300) note x !== 1
      if (
        (d2 === 3 || d3 === 3 || d4 === 3 || d5 === 3 || d6 === 3) &&
        d1 === 1
      ) {
        if (d2 === 3) {
          return 300;
        }
        if (d3 === 3) {
          return 400;
        }
        if (d4 === 3) {
          return 500;
        }
        if (d5 === 3) {
          return 600;
        }
        if (d6 === 3) {
          return 700;
        }
      }

      // [x,x,x,5] = [xxx] + 50 (example: [2,2,2,5] = 200 + 50 = 250) note x !== 1
      if (
        (d1 === 3 || d2 === 3 || d3 === 3 || d4 === 3 || d6 === 3) &&
        d5 === 1
      ) {
        if (d1 === 3) {
          return 1050;
        }
        if (d2 === 3) {
          return 250;
        }
        if (d3 === 3) {
          return 350;
        }
        if (d4 === 3) {
          return 450;
        }
        if (d6 === 3) {
          return 650;
        }
      }

      // [1,1,5,5] = 300
      if (d1 === 2 && d5 === 2) {
        return 300;
      }
    }

    if (bankedDiceCount === 3) {
      // [x,x,x] = x * 100 except [1,1,1] = 1000 (example: [2,3,2,3,3,4] = 300)
      if (
        d1 === 3 ||
        d2 === 3 ||
        d3 === 3 ||
        d4 === 3 ||
        d5 === 3 ||
        d6 === 3
      ) {
        if (d1 === 3) {
          return 1000;
        }
        if (d2 === 3) {
          return 200;
        }
        if (d3 === 3) {
          return 300;
        }
        if (d4 === 3) {
          return 400;
        }
        if (d5 === 3) {
          return 500;
        }
        if (d6 === 3) {
          return 600;
        }
      }

      // [1,1,5] = 250 (example: [1,5,1] = 250)
      if (d1 === 2 && d5 === 1) {
        return 250;
      }

      // [1,5,5] = 200 (example: [5,1,5] = 200)
      if (d1 === 1 && d5 === 2) {
        return 200;
      }
    }

    if (bankedDiceCount === 2) {
      // [1,1] = 200
      if (d1 === 2) {
        return 200;
      }

      // [1,5] = 150
      if (d1 === 1 && d5 === 1) {
        return 150;
      }

      // [5,5] = 100
      if (d5 === 2) {
        return 100;
      }
    }

    if (bankedDiceCount === 1) {
      // [1] = 100
      if (d1 === 1) {
        return 100;
      }

      // [5] = 50
      if (d5 === 1) {
        return 50;
      }
    }
  }

  function RollScore() {
    return (
      <>
        <p>Possible Roll Score: {rollScore >= 0 ? rollScore : 0}</p>
      </>
    );
  }

  function BankedScore() {
    return (
      <>
        <p>Banked Score: {turnScore}</p>
      </>
    );
  }

  /**
   * Game Score
   */

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const winnerDeclaration = () => {
    if (selectGame === "1v1") {
      if (player1Score >= 10000) {
        return "Player 1";
      }

      if (player2Score >= 10000) {
        return "Player 2";
      }
    }

    if (player1Score >= 10000) {
      return "Player 1";
    }
  };

  function WinnerDeclaration() {
    return (
      <div id="game" class={flexCol}>
        <div id="winner-declaration-container">
          <p id="winner-declaration-text" class="text-8xl">
            {winnerDeclaration()} has won the game!
          </p>
        </div>
        <div id="game-level-controls" class={flexRow}>
          <button
            id="reset-game-button"
            class={buttonStyle}
            onClick={handleResetGame}
          >
            Reset Game
          </button>
        </div>
      </div>
    );
  }

  if (pauseGame) {
    return (
      <>
        <div id="game-paused-container" class={flexCol}>
          <p>You have paused the game! Please unpause to continue!</p>
          <button
            id="resume-game-button"
            class={buttonStyle}
            onClick={handleUnpauseGame}
          >
            Unpause Game
          </button>
        </div>
      </>
    );
  }

  if (!hideRules) {
    return (
      <>
        <div id="rules-container" class={flexCol}>
          <button
            id="close-rules-button"
            class={buttonStyle}
            onClick={handleHideRules}
          >
            Close Rules
          </button>
          <ScoringRulesRefined />
        </div>
      </>
    );
  }

  if (player1Score >= 10000 || player2Score >= 10000) {
    return (
      <>
        <WinnerDeclaration />
      </>
    );
  } else {
    return (
      <div id="game" class={flexCol}>
        <p id="greeting" class="text-4xl">
          {selectGame === "1v1"
            ? "Welcome to 2-player Frackle!"
            : "Welcome to Solo Frackle"}
        </p>
        <div id="game-level-controls" class={flexRow}>
          <button
            id="game-selector"
            class={buttonStyle}
            onClick={selectGame === "Solo" ? handleSelect1v1 : handleSelectSolo}
          >
            {selectGame === "Solo"
              ? "Change game to 1v1"
              : "Change game to Solo"}
          </button>
          <button
            id="reset-game-button"
            class={buttonStyle}
            onClick={handleResetGame}
          >
            Reset Game
          </button>
          <button
            id="rules-button"
            class={buttonStyle}
            onClick={handleShowRules}
          >
            Show Rules
          </button>
          <button
            id="pause-game-button"
            class={buttonStyle}
            onClick={handlePauseGame}
          >
            Pause game
          </button>
        </div>
        <div id="gameboard-container" class={centeredFlexCol}>
          <div id="dice-container-1" class={flexRow}>
            <Dice
              diceNumber={1}
              imageSource={imageSource1}
              altSource={altSource1}
              lockDice={lockDice}
              rollCount={rollCount}
              heldDiceRoll={heldDiceRoll1}
              heldDice={heldDice1}
              handleHoldDice={handleHoldDice1}
              handleUnHoldDice={handleUnHoldDice1}
              diceValue={diceValue1}
              diceImage={diceImage}
              flexCol={flexCol}
              flexRow={flexRow}
              textDisabled={buttonStyleDisabledSM}
              text={buttonStyleSM}
            />
            <Dice
              diceNumber={2}
              imageSource={imageSource2}
              altSource={altSource2}
              lockDice={lockDice}
              rollCount={rollCount}
              heldDiceRoll={heldDiceRoll2}
              heldDice={heldDice2}
              handleHoldDice={handleHoldDice2}
              handleUnHoldDice={handleUnHoldDice2}
              diceValue={diceValue2}
              diceImage={diceImage}
              flexCol={flexCol}
              flexRow={flexRow}
              textDisabled={buttonStyleDisabledSM}
              text={buttonStyleSM}
            />
            <Dice
              diceNumber={3}
              imageSource={imageSource3}
              altSource={altSource3}
              lockDice={lockDice}
              rollCount={rollCount}
              heldDiceRoll={heldDiceRoll3}
              heldDice={heldDice3}
              handleHoldDice={handleHoldDice3}
              handleUnHoldDice={handleUnHoldDice3}
              diceValue={diceValue3}
              diceImage={diceImage}
              flexCol={flexCol}
              flexRow={flexRow}
              textDisabled={buttonStyleDisabledSM}
              text={buttonStyleSM}
            />
          </div>
          <div id="dice-container-2" class={flexRow}>
            <Dice
              diceNumber={4}
              imageSource={imageSource4}
              altSource={altSource4}
              lockDice={lockDice}
              rollCount={rollCount}
              heldDiceRoll={heldDiceRoll4}
              heldDice={heldDice4}
              handleHoldDice={handleHoldDice4}
              handleUnHoldDice={handleUnHoldDice4}
              diceValue={diceValue4}
              diceImage={diceImage}
              flexCol={flexCol}
              flexRow={flexRow}
              textDisabled={buttonStyleDisabledSM}
              text={buttonStyleSM}
            />
            <Dice
              diceNumber={5}
              imageSource={imageSource5}
              altSource={altSource5}
              lockDice={lockDice}
              rollCount={rollCount}
              heldDiceRoll={heldDiceRoll5}
              heldDice={heldDice5}
              handleHoldDice={handleHoldDice5}
              handleUnHoldDice={handleUnHoldDice5}
              diceValue={diceValue5}
              diceImage={diceImage}
              flexCol={flexCol}
              flexRow={flexRow}
              textDisabled={buttonStyleDisabledSM}
              text={buttonStyleSM}
            />
            <Dice
              diceNumber={6}
              imageSource={imageSource6}
              altSource={altSource6}
              lockDice={lockDice}
              rollCount={rollCount}
              heldDiceRoll={heldDiceRoll6}
              heldDice={heldDice6}
              handleHoldDice={handleHoldDice6}
              handleUnHoldDice={handleUnHoldDice6}
              diceValue={diceValue6}
              diceImage={diceImage}
              flexCol={flexCol}
              flexRow={flexRow}
              textDisabled={buttonStyleDisabledSM}
              text={buttonStyleSM}
            />
          </div>
          <div id="dice-container-3" class={flexRow}>
            <button
              id="roll-available-dice"
              class={buttonStyleSM}
              onClick={rollAllAvailableDice}
              hidden={
                rolled1 && rolled2 && rolled3 && rolled4 && rolled5 && rolled6
              }
            >
              Roll dice
            </button>
          </div>
          <div id="turn-actions-container">
            <RollScore />
            <BankedScore />
            <p id="turn-player-roll-text">
              Player: {player}, Turn: {turnCount}, Roll: {rollCount}
            </p>
            <button
              id="lock-dice-button"
              class={buttonStyleSM}
              onClick={lockDice === false ? handleLockDice : handleUnlockDice}
              hidden={
                heldDice1 === true ||
                heldDice2 === true ||
                heldDice3 === true ||
                heldDice4 === true ||
                heldDice5 === true ||
                heldDice6 === true
                  ? false
                  : true
              }
            >
              {lockDice === false ? "Lock Dice" : "Unlock Dice"}
            </button>
            <button
              id="next-roll-button"
              class={
                currentHeldDiceCount() <= heldDiceCount
                  ? buttonStyleDisabledSM
                  : buttonStyleSM
              }
              onClick={
                currentHeldDiceCount() < heldDiceCount ||
                currentHeldDiceCount() === heldDiceCount
                  ? handleFrackle
                  : currentHeldDiceCount() === 6 && rollScore >= 1
                  ? handleBankRoll
                  : handleNextRoll
              }
              hidden={nextRollLocked}
            >
              {currentHeldDiceCount() < heldDiceCount ||
              currentHeldDiceCount() === heldDiceCount
                ? "FRACKLED!"
                : currentHeldDiceCount() === 6 && rollScore >= 1
                ? "Bank & Reset Dice"
                : "Next roll"}
            </button>
            <button
              id="end-turn-button"
              class={buttonStyleSM}
              onClick={rollScore === undefined ? handleFrackle : handleEndTurn}
              hidden={
                currentHeldDiceCount() < heldDiceCount ||
                currentHeldDiceCount() === heldDiceCount
              }
            >
              {rollScore === undefined ? "FRACKLED!" : "End Turn"}
            </button>
          </div>
          <div id="game-scores-container">
            <p id="game-score-text">Player 1 Score: {player1Score}</p>
            <p id="game-score-text" hidden={selectGame === "Solo"}>
              Player 2 Score: {player2Score}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
