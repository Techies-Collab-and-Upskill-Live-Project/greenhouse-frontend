import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="bg-white rounded-lg pb-10 sm:mt-10">
      <h2 className="font-semibold text-2xl p-4 border-b-2">Messages</h2>

      <div className="p-4 border-b-2">
        <div>
          <div className="text-sm flex justify-between">
            <p className="">13 July</p>
            <div>
              <Link href="#">View Details</Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dicta
            iusto distinctio, harum fuga enim assumenda totam impedit maiores
            iure! Similique totam odit, praesentium vitae nostrum facere iste
            est quasi.
          </p>
        </div>
      </div>
      <div className="p-4 border-b-2">
        <div>
          <div className="text-sm flex justify-between">
            <p className="">13 July</p>
            <div>
              <Link href="#">View Details</Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dicta
            iusto distinctio, harum fuga enim assumenda totam impedit maiores
            iure! Similique totam odit, praesentium vitae nostrum facere iste
            est quasi.
          </p>
        </div>
      </div>
      <div className="p-4 border-b-2">
        <div>
          <div className="text-sm flex justify-between">
            <p className="">13 July</p>
            <div>
              <Link href="#">View Details</Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dicta
            iusto distinctio, harum fuga enim assumenda totam impedit maiores
            iure! Similique totam odit, praesentium vitae nostrum facere iste
            est quasi.
          </p>
        </div>
      </div>
    </div>
  );
}
