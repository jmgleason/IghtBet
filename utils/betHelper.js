import Colors from "../constants/Colors";

const betHelper = {
  getBetStateColor: (status_cd) => {
    switch (status_cd) {
      case 0:
        return Colors.pending;
      case 1:
        return Colors.accepted;
      case 2:
        return Colors.declined;
      case 3:
        return Colors.declined;
      case 4:
        return Colors.accepted;
      default:
        return Colors.pending;
    }
  },
  getBetStateText: (status_cd) => {
    switch (status_cd) {
      case 0:
        return "Pending";
      case 1:
        return "Accepted";
      case 2:
        return "Declined";
      case 3:
        return "Expired";
      case 4:
        return "Settled";
      default:
        return "";
    }
  },
  getBetIcon: (status_cd) => {
    switch (status_cd) {
      case 0:
        return "ellipsis-h";
      case 1:
        return "check";
      case 2:
      case 3:
        return "remove";
      case 4:
        return "check";
      default:
        return "ellipsis-h";
    }
  },
  isPending: (status_cd) => {
    return status_cd == 0;
  },
  isAccepted: (status_cd) => {
    return status_cd == 1;
  },
  isDeclined: (status_cd) => {
    return status_cd == 2;
  },
  isExpired: (status_cd) => {
    return status_cd == 3;
  },
  isSettled: (status_cd) => {
    return status_cd == 4;
  },
};

export default betHelper;
