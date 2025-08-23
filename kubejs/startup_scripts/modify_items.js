ItemEvents.modification((event) => {
  event.modify("techpack:coal_coke", (item) => {
    item.burnTime = 6400
  });
});
