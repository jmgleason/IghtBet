class Bet {
  constructor(
    id,
    ownerId,
    receivingOwnerIds,
    title,
    imageUrl,
    description,
    wager,
    settleDate,
    statusCd
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.receivingOwnerIds = receivingOwnerIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.wager = wager;
    this.settleDate = settleDate;
    this.statusCd = statusCd;
  }
}

export default Bet;
