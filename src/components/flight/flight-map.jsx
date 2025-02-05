const FlightSearchCard = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-center bg-white dark:bg-[#202124] rounded-lg cursor-pointer">
      <div className="flex flex-col w-full">
        <h2 className="text-xl font-semibold text-[#3c4043] dark:text-[#e8eaed]">
          Find flights from Riyadh to anywhere
        </h2>
        <div
          className="image-container relative w-full mt-4 aspect-auto h-[312px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?size=908x312&key=AIzaSyCMXZJgNbwR_PUfsUlyKfRldqfOyQOEd_g&language=en-US&theme=dark&scale=2&markers=scale:2|anchor:center|icon:https://www.gstatic.com/flights/app/dot_pink_21_dark_theme.png|24.7135517%2C46.6752957&markers=scale:2|anchor:center|icon:https://www.gstatic.com/flights/app/dot_blue_21_dark_theme.png|34.0549076%2C-118.242643|51.5072178%2C-0.1275862|25.2048493%2C55.2707828|41.0082376%2C28.9783589|48.2080696%2C16.3713095|1.352083%2C103.819836&style=feature:all|element:labels|visibility:off&style=feature:poi|element:all|visibility:off&style=feature:road|element:all|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:all|element:geometry|color:0x06080c&style=feature:water|element:geometry|color:0x06080c&style=feature:administrative|element:geometry|color:0x4a5462&style=feature:landscape.natural|element:geometry|color:0x162b31&style=feature:landscape.natural.landcover|element:geometry|color:0x213f42')`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 mt-4">
            <div
              style={{
                boxShadow: "0 1px 2px 0 #3c40434d, 0 1px 3px 1px #3c404326;",
              }}
              className="w-full transform -translate-x-1/2 -translate-y-1/2 md:w-auto px-6 py-2 text-base font-semibold bg-[#202124] rounded-full text-[#aecbfa] hover:shadow-lg hover:bg-[#303134]"
            >
              Explore destinations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchCard;
