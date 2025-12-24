import React from 'react';

interface StatusProp {
  status: 'completed' | 'underConstruction' | 'inProgress';
}
export default function Status({ status }: StatusProp) {
  switch (status) {
    case 'underConstruction':
      return (
        <p>
          <span className="font-bold">En chantier /</span>
          <span className="font-light"> Under Construction</span>
        </p>
      );
    case 'inProgress':
      return (
        <p>
          <span className="font-bold">En instruction /</span>
          <span className="font-light"> Instruction in progress</span>
        </p>
      );
    default:
      return <p className="font-light">Pas d&apos;indications</p>;
  }
}
