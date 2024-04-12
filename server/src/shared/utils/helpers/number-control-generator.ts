export enum EnumTypeEntity {
  ServiceOrder = 'OS',
  Occurrence = 'OC',
  SupplyOrder = 'OF',
  Reception = 'R',
}

export const numberControlGenerator = (
  typeEntity: EnumTypeEntity,
  id: number
): string => {
  const numberControl = `${typeEntity}${buildDate()}${zeroFill(id)}`;
  return numberControl;
};

const buildDate = (): string => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}${getMonth(
    date
  )}${date.getDate()}`;
  return formattedDate;
};

const getMonth = (date: Date): string => {
  var month = date.getMonth() + 1;
  return month < 10 ? '0' + month : `${month}`;
};

const zeroFill = (exports.zeroFill = (id: number): string => {
  const length = id.toString().length;
  const zero = '0';
  const width = 10;

  if (length > width) {
    return id.toString();
  } else {
    return zero.repeat(width - length) + id.toString();
  }
});
