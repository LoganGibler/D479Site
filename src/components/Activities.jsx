import React from "react";

const Activities = () => {
  return (
    <div className="flex justify-center mt-[6rem]">
      <div className="flex max-w-[1200px]">
        <div className="flex flex-col">
          <h1 className="font-bold text-[28px]">
            Main Activities on Taniti Island
          </h1>
          <ol className="list-decimal">
            <li className="ml-4 mt-8 font-semibold">
              Beach and Water Activities:
            </li>
            <ul className="list-disc">
              <li className="ml-8 mt-2">
                Relax on the Beaches: Taniti's pristine sandy beaches are
                perfect for sunbathing, swimming, and unwinding. Whether you
                prefer the soft sands of Taniti City or the more rugged rocky
                shores, there's a beach experience for everyone.
              </li>
              <li className="ml-8 mt-2">
                Snorkeling: Discover the vibrant marine life just beneath the
                surface of Taniti's clear waters. Snorkeling tours are
                available, offering a glimpse of the island's underwater world.
              </li>
              <li className="ml-8 mt-2">
                Chartered Fishing Tours: For fishing enthusiasts, Taniti offers
                chartered fishing tours where you can try your hand at catching
                local fish while enjoying the beautiful seascape.
              </li>
            </ul>
            <li className="ml-4 mt-8 font-semibold">
              Adventure and Nature Exploration:
            </li>
            <ul className="list-disc">
              <li className="ml-8 mt-2">
                Rainforest Hikes: Taniti's lush tropical rainforests are ideal
                for exploration. Guided hikes take you through dense greenery,
                where you can experience the island's diverse flora and fauna up
                close.
              </li>
              <li className="ml-8 mt-2">
                Volcano Tours: A visit to Taniti wouldn’t be complete without
                exploring the island's active volcano. Guided tours provide a
                safe and informative way to experience this natural wonder.
              </li>
              <li className="ml-8 mt-2">
                Zip-Lining: For thrill-seekers, zip-lining through the
                rainforest canopy offers an exhilarating perspective on Taniti's
                natural beauty.
              </li>
            </ul>

            <li className="ml-4 mt-8 font-semibold">
              Entertainment and Leisure
            </li>
            <ul className="list-disc">
              <li className="ml-8 mt-2">
                Merriton Landing: Many of Taniti’s entertainment options are
                concentrated in Merriton Landing, a rapidly developing area on
                the north side of Yellow Leaf Bay. This area is perfect for
                those looking to combine relaxation with a bit of excitement.
              </li>
              <li className="ml-8 mt-2">
                Pubs and Microbrewery: Visit one of Taniti’s local pubs or the
                microbrewery for a taste of the island’s nightlife. Whether you
                prefer a quiet drink or a lively evening, you’ll find it here.
              </li>
              <li className="ml-8 mt-2">
                Dance Club: For those who enjoy dancing, the new dance club in
                Merriton Landing offers a fun night out with music and dancing.
              </li>
              <li className="ml-8 mt-2">
                Movie Theater and Arcade: Spend a rainy day or an evening at the
                movie theater, or enjoy classic games at the local arcade.
              </li>
              <li className="ml-8 mt-2">
                Bowling: Have a casual and fun time at the bowling alley, a
                great way to relax with friends or family.
              </li>
              <li className="ml-8 mt-2">
                Upcoming Golf Course: Golf enthusiasts will be pleased to know
                that a nine-hole golf course is set to open next year, offering
                another exciting activity on the island.
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Activities;
