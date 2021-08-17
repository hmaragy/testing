var prefTime = responseObj.activeTime[currentDay];
if (
  prefTime &&
  ((currentHour >= parseInt(prefTime.FROM) &&
    currentHour < parseInt(prefTime.TO, 10)) ||
    (parseInt(prefTime.FROM, 10) > parseInt(prefTime.TO, 10) &&
      currentHour >= parseInt(prefTime.FROM, 10)) ||
    (parseInt(prefTime.FROM, 10) > parseInt(prefTime.TO, 10) &&
      currentHour < parseInt(prefTime.TO, 10)))
) {

  (time >= from && time < to) || (from > to && time>from) || (from > to && time < to)