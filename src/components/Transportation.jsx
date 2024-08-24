import React from "react";

const Transportation = () => {
  return (
    <div className="flex justify-center mt-[6rem]">
      <div className="flex flex-col">
        <h1 className="font-bold text-[28px]">Getting to Taniti</h1>
        <ol className="list-decimal">
          <li className="ml-4 mt-8 font-semibold">Arrival by Air:</li>
          <ul className="list-disc">
            <li className="ml-8 mt-2">
              Taniti is primarily accessed by air, with a small airport that
              accommodates small jets and propeller planes.
            </li>
            <li className="ml-8 mt-2">
              The airport is currently being expanded to allow larger jets to
              land, making it even easier for tourists to reach the island in
              the near future.
            </li>
          </ul>
          <li className="ml-4 mt-8 font-semibold">Arrival by Sea:</li>
          <ul className="list-disc">
            <li className="ml-8 mt-2">
              For those who prefer to travel by sea, a small cruise ship docks
              at Yellow Leaf Bay once a week, allowing passengers to enjoy a
              night on the island.
            </li>
          </ul>
        </ol>

        <h1 className="font-bold text-[28px] mt-[5rem]">
          Getting around Taniti
        </h1>
        <ol className="list-decimal">
          <li className="ml-4 mt-8 font-semibold">Public Transportation: </li>
          <ul className="list-disc">
            <li className="ml-8 mt-2">
              Public Buses: In Taniti City, public buses are available from 5
              a.m. to 11 p.m. daily, providing an easy and affordable way to
              explore the city.
            </li>
            <li className="ml-8 mt-2">
              Private Buses: Private buses serve other areas of the island,
              offering flexible transportation options beyond the city limits.
            </li>
          </ul>
          <li className="ml-4 mt-8 font-semibold">Taxis and Car Rentals: </li>
          <ul className="list-disc">
            <li className="ml-8 mt-2">
              Taxis: Taxis are readily available in Taniti City, perfect for
              quick and convenient travel within the city.
            </li>
            <li className="ml-8 mt-2">
              Car Rentals: For those who wish to explore the island at their own
              pace, rental cars are available from a local agency near the
              airport.
            </li>
          </ul>

          <li className="ml-4 mt-8 font-semibold">Biking and Walking: </li>
          <ul className="list-disc">
            <li className="ml-8 mt-2">
              Bike Rentals: Bikes and helmets are available for rent from
              several vendors across the island. Helmets are required by law,
              ensuring your safety while exploring.
            </li>
            <li className="ml-8 mt-2">
              Walking: Taniti City is flat and very walkable, making it easy to
              explore the area on foot. The area surrounding Merriton Landing is
              also pedestrian-friendly, ideal for leisurely strolls.
            </li>
          </ul>
        </ol>

        <h1 className="font-bold text-[28px] mt-[5rem]">Additional Tips</h1>
        <ol className="">
          <li className="ml-4 mt-8 font-semibold">
            Explore Merriton Landing:{" "}
          </li>
          <ul className="list-disc">
            <li className="ml-8 mt-2">
              Many tourists prefer to stay in the Merriton Landing area, which
              is easy to explore on foot and offers a variety of attractions and
              amenities.
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
};

export default Transportation;
