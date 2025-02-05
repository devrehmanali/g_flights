const FlightCard = ({ flight }) => {
  return (
    <div className="flex bg-white dark:bg-[#202124] cursor-pointer ">
      <div
        className="bg-cover bg-center rounded-2xl p-6 w-full h-[134px] aspect-auto "
        style={{
          backgroundImage: `url('${flight.imageUrl}'), url('//www.gstatic.com/flights/app/destination_bg_240.svg')`,
        }}
      ></div>
      <div className="flex flex-col p-4 w-full">
        <div className="flex justify-between text-base font-medium text-[#3c4043] dark:text-[#e8eaed]">
          <span>{flight.from}</span>
          <span>{flight.price}</span>
        </div>
        <div className="text-sm font-normal text-[#5f6368] dark:text-[#9aa0a6]">
          {flight.dates}
        </div>
        <div className="flex items-center text-sm font-normal text-[#5f6368] dark:text-[#9aa0a6] overflow-hidden text-ellipsis line-clamp-2">
          <span className="text-sm font-normal text-[#81c995] dark:text-[#9aa0a6]">
            {flight.stopCount}
          </span>
          <span className="mx-1">.</span>
          <span className="">{flight.flightTime}</span>
          <span className="mx-1">.</span>
          <span className="">{flight.airline}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
