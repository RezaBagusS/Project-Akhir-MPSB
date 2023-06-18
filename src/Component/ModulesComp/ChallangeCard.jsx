import { dataChallange } from "../../data/dataChallange";
import { useNavigate } from "react-router-dom";

const ChallangeCard = ({ filter, dataIdChallenge }) => {
  const navigate = useNavigate();

  const handleDate = (date) => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    const ho = new Intl.DateTimeFormat("en", { hour: "2-digit" }).format(d);
    return `${da} ${mo} ${ye}, ${ho}`;
  };

  const isOpen = (open, close) => {
    const openDate = new Date(open);
    const closeDate = new Date(close);
    const now = new Date();
    return now >= openDate && now <= closeDate;
  };

  const statusChallange = (open, close, id) => {
    const openDate = new Date(open);
    const closeDate = new Date(close);
    const now = new Date();
    if (dataIdChallenge.includes(id)) {
      return "COMPLETED";
    } else {
      if (now >= openDate && now <= closeDate) {
        return "OPEN";
      } else if (now < openDate && now < closeDate) {
        return "ONGOING";
      } else {
        return "CLOSED";
      }
    }
  };

  const filteredChallenges =
    filter.length > 0
      ? dataChallange.filter(
          (item) =>
            filter.includes(item.tag) &&
            new Date(item.closeDate) >
              new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        )
      : dataChallange.filter(
          (item) =>
            new Date(item.closeDate) >
            new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        );

  filteredChallenges.sort((a, b) => a.closeDate - b.closeDate);

  if (filteredChallenges.length === 0) {
    return (
      <div className="w-full flex items-center justify-center h-20 border-t-2">
        <h1 className="font-semibold text-center text-2xl rounded-lg mt-5 bg-gray-400 py-5 px-10">
          Challange belum ada !! 😥😥
        </h1>
      </div>
    );
  }

  return filteredChallenges.map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col gap-y-4 sm:gap-0 sm:flex-row justify-between items-center rounded-lg bg-gray-200 ring-1 ring-light-blue-300 px-8 py-5"
      >
        <h1
          className={`font-medium text-base md:text-lg 
              ${
                isOpen(item.openDate, item.closeDate)
                  ? "text-cust-blue opacity-80"
                  : "opacity-60"
              }
          `}
        >
          {item.title}
        </h1>
        <div className="flex flex-col sm:flex-row gap-x-2 gap-y-2 items-center text-xs">
          <div>
            <p className="opacity-70">Open : {handleDate(item.openDate)}</p>
            <p className="opacit y-70">Close : {handleDate(item.closeDate)}</p>
          </div>
          <button
            onClick={() => navigate(`/dashboard/challenges/${item.id}`)}
            disabled={!isOpen(item.openDate, item.closeDate)}
            className={`w-32 py-2 text-base font-medium cursor-pointer rounded-md transition-all duration-300 text-cust-beige
                  ${
                    isOpen(item.openDate, item.closeDate)
                      ? "bg-blue-700 hover:bg-cust-blue"
                      : "bg-red-500 hover:cursor-not-allowed"
                  }
              `}
          >
            {statusChallange(item.openDate, item.closeDate, item.id)}
          </button>
        </div>
      </div>
    );
  });
};

export default ChallangeCard;
