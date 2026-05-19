export const calculateDiscount = (discount: number, hargaBarang: number) => {
  const nilaiDiskon = hargaBarang * (discount / 100);
  const totalShopping = hargaBarang - nilaiDiskon;
  const percentagePoint = nilaiDiskon * (2 / 100);

  return { nilaiDiskon, totalShopping, percentagePoint };
};

