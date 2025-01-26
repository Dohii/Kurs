import {
  SimpleGrid,
  Pagination,
  Group,
  Text,
  Input,
  Flex,
} from '@mantine/core';
import FirmeCard from '../../Components/FirmeCard/FirmeCard';
import { useSupabase } from '../../Shared/AppContext';
import { useState, useEffect } from 'react';

function Firme() {
  const { firme } = useSupabase();
  const [searchState, setSearchState] = useState('');
  const [filteredData, setFilteredData] = useState(firme);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;
  const maxPages =
    filteredData.length % itemsPerPage !== 0
      ? Math.floor(filteredData.length / itemsPerPage + 1)
      : Math.floor(filteredData.length / itemsPerPage);

  const data = filteredData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  useEffect(() => {
    if (searchState === '') {
      setFilteredData(firme);
    } else {
      const filteredFirme = firme?.filter((search) => {
        return search.naziv.toLowerCase().includes(searchState.toLowerCase());
      });
      setFilteredData(filteredFirme);
    }
  }, [searchState]);

  const handleChange = function (e) {
    setSearchState(e.target.value.toLowerCase());
  };

  return (
    <Flex direction='column' ml='100' mr='100'>
      <Input
        w='300'
        mb='30'
        type='text'
        value={searchState}
        placeholder='pretraži...'
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <SimpleGrid cols={3} spacing='40'>
        {data &&
          data.map((firma) => {
            return <FirmeCard key={firma.id} firmaData={firma} />;
          })}
      </SimpleGrid>
      <Group justify='center'>
        {data.length > 0 ? (
          <Pagination
            total={maxPages}
            value={activePage}
            onChange={setActivePage}
            mt='30'
          />
        ) : (
          <Text>Nema rezultata!</Text>
        )}
      </Group>
    </Flex>
  );
}

export default Firme;
