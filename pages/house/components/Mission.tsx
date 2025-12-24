import React from 'react';

interface MissionProp {
  isCompleted: boolean | undefined;
}
export default function Mission({ isCompleted }: MissionProp) {
  return isCompleted ? (
    <>
      <p>
        <span className="font-bold">Mission complète /</span>
        <span className="font-light"> Full assignment</span>
      </p>
    </>
  ) : (
    <>
      <p>
        <span className="font-bold">Mission Pc /</span>
        <span className="font-light"> Building Permit</span>
      </p>
    </>
  );
}
