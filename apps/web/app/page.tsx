import { Box, Card, Container, Flex, Heading, Text } from '@radix-ui/themes';
import dynamic from 'next/dynamic';
import { StandardButton } from 'ui';

export default function Home() {
  
  const MainMap = dynamic(() => import('ui/map/Map'), {
    ssr: false,
  });

  const mapOptions = {
    center: { lat: -3.117034, lng:  -60.02578 },
    zoom: 12,
    maxZoom: 13,
    minZoom: 13,
    scrollWheelZoom: true,
  };

  return (
    <>
      <Card my={'7'} variant='surface' size={'4'} style={{ borderRadius: '0' }}>
        <Container py={'6'}>
          <Flex direction={'column'}>
            <Heading as='h1' mb={'4'} size={'7'}>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </Heading>
            <Text as='p' size={'4'}>
              Qui minim labore adipisicing minim sint
            </Text>
            <Box mt={'6'}>
              <StandardButton>Learn More</StandardButton>
            </Box>
          </Flex>
        </Container>
      </Card>
      <Card>
        <MainMap {...mapOptions}></MainMap>
      </Card>
    </>
  );
}
