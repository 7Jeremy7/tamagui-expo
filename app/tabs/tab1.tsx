// Tab1.tsx
import React, { useEffect, useState } from 'react';
import { H1, H5, Tabs, Text, View, styled, Button } from 'tamagui';
import { Pencil, Trash } from '@tamagui/lucide-icons';
import { MyStack } from '../../components/MyStack';
import { getApiMovie, getApiScene } from '../services/ApiMovie';

interface Movie {
  id: number,
  title: string,
  director: string,
  duration: number,
}

interface Scenes {
  id: number,
  description: string,
  budget: number,
  minutes: number,
  filmId: number,
}

const Tab1: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [scenes, setScenes] = useState<Scenes[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieClick = async (movieId: number) => {
    try {
      const sceneData = await getApiScene(movieId);
      setScenes(sceneData);

      const movieDetail = movies.find((movie) => movie.id === movieId);
      setSelectedMovie(movieDetail);
    } catch (error) {
      console.error('Error fetching movie details or scenes:', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getApiMovie();
        setMovies(movieData);
      } catch (error) {
        console.error('Fetching error:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <MyStack>
      <Tabs
        defaultValue="tab1"
        orientation="vertical"
        flexDirection="row"
        width="100%"
      >
        <Tabs.List>
          {movies.map((movie) => (
            <StyledTab
              key={movie.id}
              value={`tab${movie.id}`}
              onClick={() => handleMovieClick(movie.id)}
            >
              <H1>{movie.title}</H1>
              <ContentApi>
                <Text>Director: {movie.director}</Text>
                <Text>Time: {movie.duration}</Text>
              </ContentApi>
              <IconEdit>
                <Button
                  icon={Pencil}
                  style={{ borderRadius: 100, margin: 5 }}
                ></Button>
                <Button
                  icon={Trash}
                  style={{ borderRadius: 100, margin: 5 }}
                ></Button>
              </IconEdit>
            </StyledTab>
          ))}
        </Tabs.List>
      </Tabs>
      {selectedMovie && (
        <View>
          <H1>{selectedMovie.title} Scenes</H1>
          <ul>
            {scenes.map((scene) => (
              <li key={scene.id}>
                {scene.description} - Budget: {scene.budget}, Minutes:{' '}
                {scene.minutes}
              </li>
            ))}
          </ul>
        </View>
      )}
    </MyStack>
  );
};

const StyledTab = styled(Tabs.Tab, {
  padding: 10,
  margin: 27,
  borderRadius: 10,
  width: 330,
  height: 170,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const ContentApi = styled(View, {
  display: 'flex',
  width: 100,
  flexDirection: 'column',
  marginTop: 10,
});

const IconEdit = styled(View, {
  alignSelf: 'flex-end',
  flexDirection: 'row-reverse',
});

export default Tab1;
