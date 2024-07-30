import React from 'react';
import { Box } from '@mui/material';
import ASTITitle from '../../labels/ASTITitle';
import ASTILink from '../../labels/ASTILink';

export default function Resources() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap={4}
    >
      <ASTITitle text="Resources" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap={2}
      >
        <ASTILink text="Spotify Playlist #1" url="https://open.spotify.com/playlist/01eio3dk1rT70NHMfawapV?si=9UJEbM1hQKyut0fbUUxZQw" />
        <ASTILink text="Spotify Playlist #2" url="https://open.spotify.com/playlist/5qDBaISte6c50RdIliQ2HN?si=sGGLcJb6TrS1htFK6c4RJA" />
        <ASTILink text="Spotify Playlist #3" url="https://open.spotify.com/playlist/0mdicVBbV9CzKvjfEpgkdg?si=mRKs7WfwQxaV8Pz6W6jEGg" />
        <ASTILink text="RapScript App in Android" />
      </Box>
    </Box>
  );
}
