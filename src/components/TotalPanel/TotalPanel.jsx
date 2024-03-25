import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/config';

const TotalPanel = () => {
  const [totals, setTotals] = useState({ films: 0, people: 0, species: 0 });

  useEffect(() => {
    const loadTotals = async () => {
      const films = await fetchData('films');
      const people = await fetchData('people');
      const species = await fetchData('species');
      setTotals({ films: films.count, people: people.count, species: species.count });
    };

    loadTotals();
  }, []);

  return (
    <div>
      <p>Total Films: {totals.films}</p>
      <p>Total People: {totals.people}</p>
      <p>Total Species: {totals.species}</p>
    </div>
  );
};

export default TotalPanel;
