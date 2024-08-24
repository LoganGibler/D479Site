import React from "react";

const Lodging = () => {
  return (
    <div className="flex justify-center mt-[6rem]">
      <div className="flex max-w-[1200px]">
        <div className="flex flex-col">
          <h1 className="font-bold text-[28px]">
            Lodging Options on Taniti Island
          </h1>
          <ol className="list-decimal">
            <li className="ml-4 mt-8 font-semibold">
              Wide Range of Accommodations
            </li>
            <ul className="list-disc">
              <li className="ml-8 mt-2">
                Variety of Lodging: Taniti offers a diverse range of lodging
                options to suit different preferences and budgets. Whether
                you're looking for an affordable stay or a luxurious experience,
                you'll find a place that fits your needs.
              </li>
            </ul>
            <li className="ml-4 mt-8 font-semibold">Types of Accommodations</li>
            <ul className="list-disc">
              <li className="ml-8 mt-2">
                Hostel: For budget-conscious travelers, there is an inexpensive
                hostel that provides basic amenities and a comfortable place to
                rest.
              </li>
              <li className="ml-8 mt-2">
                Four-Star Resort: If you prefer luxury, Taniti boasts a large
                four-star resort offering premium services and facilities,
                perfect for a relaxing and indulgent stay.
              </li>
              <li className="ml-8 mt-2">
                Small Family-Owned Hotels: Experience the warm hospitality of
                Taniti by staying in one of the many small, family-owned hotels.
                These accommodations provide a cozy and personalized experience.
              </li>
              <li className="ml-8 mt-2">
                Bed and Breakfasts: For a homely and intimate stay, there is a
                growing number of bed and breakfasts on the island. These offer
                a unique glimpse into local life and often include a homemade
                breakfast.
              </li>
            </ul>

            <li className="ml-4 mt-8 font-semibold">
              Government Regulation and Inspection
            </li>
            <ul className="list-disc">
              <li className="ml-8 mt-2">
                Strict Regulations and Inspections: All types of lodging on
                Taniti are strictly regulated and regularly inspected by the
                Tanitian government. This ensures that accommodations maintain
                high standards of cleanliness, safety, and service, providing
                peace of mind for visitors.
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Lodging;
