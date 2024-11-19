export default function PriceFooter() {
  return (
    <div className="bg-customblue text-neutral-100 flex justify-between text-center h-full w-full">
      <div className="w-full flex justify-end p-2 items-center">
        <div className="text-2xl font-bold">$150</div>
        <div className="text-sm">per night</div>
      </div>

      <div className="w-full flex justify-start p-2 text-center items-center">
        <div className="text-md font-bold">$4,500</div>
        <div className="text-sm">per month</div>
      </div>
    </div>
  );
}
