class Bet {
  constructor(id, ownerId, receivingOwnerIds, title, imageUrl, description, wager, dueDate, accepted) {
    this.id = id;
    this.ownerId = ownerId;
    this.receivingOwnerIds = receivingOwnerIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.wager = wager;
    this.dueDate = dueDate;
    this.accepted = accepted;
  }
}

export default Bet;
