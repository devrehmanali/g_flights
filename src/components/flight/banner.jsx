const Banner = () => (
  <div
    className="relative w-full min-h-[35vh] sm:min-h-[45vh] md:min-h-[55vh] lg:min-h-[75vh] bg-cover bg-center"
    style={{
      backgroundImage:
        'url("https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg")',
    }}
  >
    <div className="absolute bottom-0 w-full flex justify-center items-center h-[140px] bg-white dark:bg-[#202124] p-6">
      <h1 className="flight text-[#e8eaed] text-[56px] font-normal">Flights</h1>
    </div>
  </div>
);

export default Banner;
