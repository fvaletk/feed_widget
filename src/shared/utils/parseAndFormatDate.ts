function withPadding(data: string) {
  return data.length === 1 ? `0${data}` : data;
}

export function parseAndFormatDate(dateString: string) {
  const parsedDate = new Date(dateString);

  const day: string = parsedDate.getDate().toString();
  const month: string = (parsedDate.getMonth() + 1).toString();
  const year: string = parsedDate.getFullYear().toString();
  const hour: string = parsedDate.getHours().toString();
  const minutes: string = parsedDate.getMinutes().toString();

  const DD = withPadding(day);
  const MM = withPadding(month);
  const YY = withPadding(year);
  const HH = withPadding(hour);
  const mm = withPadding(minutes);

  return `${DD}/${MM}/${YY} ${HH}:${mm}`;
}
