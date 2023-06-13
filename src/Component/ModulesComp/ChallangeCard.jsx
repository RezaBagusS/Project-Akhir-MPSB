import { dataChallange } from "../../data/dataChallange";
import { useNavigate } from "react-router-dom";

const ChallangeCard = ({ filter }) => {
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

  const statusChallange = (open, close) => {
    const openDate = new Date(open);
    const closeDate = new Date(close);
    const now = new Date();
    if (now >= openDate && now <= closeDate) {
      return "OPEN";
    } else if (now < openDate && now < closeDate) {
      return "ONGOING";
    } else {
      return "CLOSED";
    }
  };

  const filteredChallanges =
    filter.length > 0
      ? dataChallange.filter((item) => filter.includes(item.tag))
      : dataChallange;

  if (filteredChallanges.length === 0) {
    return (
        <div className="w-full flex items-center justify-center h-20 border-t-2">
            <h1 className="font-semibold text-center text-2xl rounded-lg mt-5 bg-slate-200 py-5 px-10">
                Challange belum ada !! 😥😥 
            </h1>
        </div>
    )
  }

  return filteredChallanges.map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col gap-y-4 sm:gap-0 sm:flex-row justify-between items-center rounded-lg ring-1 ring-zinc-500 px-8 py-5"
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
            className={`w-32 py-2 text-base font-medium cursor-pointer rounded-md transition-all duration-300
                  ${
                    isOpen(item.openDate, item.closeDate)
                      ? "bg-slate-300 hover:bg-cust-blue text-cust-blue hover:text-cust-beige"
                      : "bg-red-300 text-cust-beige"
                  }
              `}
          >
            {statusChallange(item.openDate, item.closeDate)}
          </button>
        </div>
      </div>
    );
  });
};

export default ChallangeCard;
