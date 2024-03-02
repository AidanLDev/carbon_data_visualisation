export function HeroImage() {
  return (
    <div className="h-96 bg-hero-image bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="p-8 text-white bg-[#0009]">
        <h1 className="text-5xl">Carbon Data Visualisation</h1>
        <hr className="text-secondary border-4 w-[36rem] mb-4" />
        <h2 className="text-2xl">Visualising the carbon intensity</h2>
        <h2 className="text-2xl">
          Through specified date ranges in your timezone
        </h2>
      </div>
    </div>
  );
}
