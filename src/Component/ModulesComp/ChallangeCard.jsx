import { dataChallange } from "../../data/dataChallange";

const ChallangeCard = () => {
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
} 
//   console.log(haspen("2023-05-22T16:00:00.999+07:00","2023-05-23T16:00:00.999+07:00"));

  return dataChallange.map((item) => {
    return (
      <div 
        key={item.id}
        className="flex flex-col gap-y-4 sm:gap-0 sm:flex-row justify-between items-center rounded-lg ring-1 ring-zinc-500 px-8 py-5">
        <h1 className={`font-medium text-base md:text-lg 
            ${isOpen(item.openDate, item.closeDate) ? "text-cust-blue opacity-80" : "opacity-60"}
        `}>
          {item.title}
        </h1>
        <div className="flex flex-col sm:flex-row gap-x-2 gap-y-2 items-center text-xs">
          <p className="opacity-70">Closed on : {handleDate(item.closeDate)}</p>
          <button 
            disabled={!isOpen(item.openDate, item.closeDate)}
            className={`w-32 py-2 text-base font-medium cursor-pointer rounded-md transition-all duration-300
                ${isOpen(item.openDate, item.closeDate) ? "bg-slate-300 hover:bg-cust-purple text-cust-blue hover:text-cust-beige" : "bg-red-300 text-cust-beige"}
            `}>
            {isOpen(item.openDate, item.closeDate) ? "JOIN" : "ClOSED"}
          </button>
        </div>
      </div>
    );
  });
};

export default ChallangeCard;
