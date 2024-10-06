import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";

const OppOverview = () => {
  return (
    <div>
      <WhiteCard title="Description">
        <div className="mt-5">
          <p className="text-slate-400 text-sm mb-4">
            This online course will help you build an authentic STEAM teaching
            approach. This moves beyond simply using the design-process to truly
            being able to integrate all the arts in and through STEM. You'll
            discover how, when and where to use STEAM effectively. You'll also
            receive templates, resources and planning documents that will save
            you hours of time.
          </p>
          <span className="text-blue-400 cursor-pointer">See more &gt;</span>
        </div>
      </WhiteCard>
      <WhiteCard title={"Overview"} style={"mt-3"}>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <WhiteCard style={"col-span-3 rounded-xl"}>
            <p className="text-slate-300">N. Bookings</p>
            <p className="text-bold">13</p>
          </WhiteCard>
          <WhiteCard style={"col-span-3 rounded-xl"}>
            <p className="text-slate-300">N. Orders</p>
            <p className="text-bold">1,300</p>
          </WhiteCard>
          <WhiteCard style={"col-span-3 rounded-xl"}>
            <p className="text-slate-300">Views</p>
            <p className="text-bold">100</p>
          </WhiteCard>
        </div>
      </WhiteCard>
      <WhiteCard title={"Images"} style={"mt-3"}>
        
      </WhiteCard>
    </div>
  );
};

export default OppOverview;
