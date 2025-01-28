import { Grid, Modal , Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {useState ,useEffect} from 'react';
import UnsplashApi from "../../../api/axiosConfigApi";


export default function Galery() {
  const [images, setImages] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

  const fetchImages = async () => {
    // setLoading(true);
    // setError(null);
    try {
      const { data } = await UnsplashApi.get('')
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };
  

  useEffect(()=>{
    fetchImages();
  },[])
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        {images.map((image)=>(
          <p key={image.id}>{image.alt_description}</p>
        ))}
     </Modal> {/* variant="default" onClick={open} */}
      {images.map((image) => (
          <>
          <Grid.Col span={4}>
            <Image variant="default" onClick={open}
                  key={image.id}
                   radius="xl"
                     h={300}
                     w={250}
                    fit="contain"
                    src={image.urls.regular}
                />
        
          </Grid.Col>
          </>
        ))}
    </Grid>
  );
}


