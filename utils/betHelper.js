import Colors from "../constants/Colors"

const betHelper = {
  getBetStateColor: (status_cd) => {
    switch(status_cd) {
      case 0:
        return Colors.pending;
      case 1:
        return Colors.accepted;
      case 2:
        return Colors.declined;
      default:
        return Colors.pending;
    }
  },
  getBetStateText: (status_cd) => {
    switch(status_cd) {
      case 0:
        return "Pending";
      case 1:
        return "Accepted";
      case 2:
        return "Declined";
      case 3:
        return "Expired";
      default:
        return "";
    }
  },
  getBetIcon: (status_cd) => {
    switch(status_cd) {
      case 0:
        return "ellipsis-h";
      case 1:
        return "check";
      case 2:
      case 3:
        return "remove";
      default:
        return "ellipsis-h";
    }
  }
}

export default betHelper;
