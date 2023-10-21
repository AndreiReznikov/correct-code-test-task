const setSelectionGuestsText = (itemsCount, totalSum) => {
  let guests;
  let babies;

  const babiesNumber = itemsCount[2] ? itemsCount[2] : 0;

  const firstGuestWordCondition = (totalSum - babiesNumber) % 10
    === 1 && totalSum - babiesNumber !== 11;
  const secondGuestWordCondition = [2, 3, 4].includes((totalSum - babiesNumber) % 10)
    && ![12, 13, 14].includes(totalSum - babiesNumber);

  if (totalSum === 0) return 'Сколько пассажиров';

  if (firstGuestWordCondition) guests = 'человек';
  else if (secondGuestWordCondition) guests = 'человека';
  else guests = 'человек';

  const firstBabyWordCondition = babiesNumber % 10 === 1 && babiesNumber !== 11;
  const secondBabyWordCondition = [2, 3, 4].includes(babiesNumber % 10)
    && ![12, 13, 14].includes(babiesNumber);

  if (firstBabyWordCondition) babies = 'младенец';
  else if (secondBabyWordCondition) babies = 'младенца';
  else babies = 'младенцев';

  const babiesOnly = babiesNumber !== 0 && totalSum - babiesNumber === 0;
  const babiesAndGuests = babiesNumber !== 0 && totalSum - babiesNumber !== 0;

  let selectionText = `${totalSum} ${guests}`;

  if (babiesOnly) selectionText = `${babiesNumber} ${babies}`;
  else if (babiesAndGuests) {
    selectionText = `${
      totalSum - babiesNumber
    } ${guests}, ${babiesNumber} ${babies}`;
  }

  return selectionText;
};

const constants = {
  setSelectionGuestsText,
};

export default constants;
