import React from 'react';
import { Box } from '@mui/material';

import ASTITitle from '../../labels/ASTITitle';
import ASTIText from '../../labels/ASTIText';

export default function Genesis() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap={4}
    >
      <ASTITitle text="Genesis" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="80%"
        gap={2}
      >
        <ASTIText text="ASTIRoids is a twist on the word Asteroids based on the acronym ASTIR." />
        <ASTIText text="ASTIR stands for the Amsterdam School of Theatrically Improvised Rappers." />
        <ASTIText text="Originally meant as School as in a School of thought, or a school of fish, it actually became an actual school as we organized many workshops with multiple local and travelling teachers !" />
        <ASTIText text="ASTIRoids are their members." />
        <ASTIText text="The ambition is to have fun and go on stage." />
        <ASTIText text="ASTIRoids was founded by Manuel Sans Persijn in 2022." />
        <ASTIText text="Manuel Sans Persijn aka le Cheb tried theater in 2021 and very quickly went into improv theater, then musical improv theater and fell in love with improvised rapping. He took his first classes, notably with Lee Apsey from Slice of Rhyme and the North Coast NYC workshops at Boom Chicago 2022." />
        <ASTIText text="In September 2022, after he searched for other enthusiasts to practice improvised rapping together." />
        <ASTIText text="Manuel, Ollie and Mash would regularly meet at Manuel’s house and practice together, their little group expanded and they eventually moved into regular jams at Q-Factory." />
        <ASTIText text="Their first shows took place at Tag Out Theater, and they eventually also performed at CREA under Easylaughs." />
        {/* <ASTIText text="ASTIRoids is a twist on the word Asteroids based on the acronym ASTIR." />
        <ASTIText text="ASTIR stands for the Amsterdam School of Theatrically Improvised Rappers." />
        <ASTIText text="Originally meant as School as in a School of thought, or a school of fish" />
        <ASTIText text="ASTIRoids are their members." />
        <ASTIText text="The ambition is to have fun and go on stage." />
        <ASTIText text="ASTIRoids was founded by Manuel Sans Persijn in 2022." />
        <ASTIText text="Manuel Sans Persijn tried theater in 2021 and very quickly went into improv theater, then musical improv theater and fell in love with improvised rapping. He took his first classes, notably with Lee Apsey from Slice of Rhyme and the North Coast NYC workshops at Boom Chicago 2022." />
        <ASTIText text="In September 2022, after he searched for other enthusiasts to practice improvised rapping together." />
        <ASTIText text="Manuel, Ollie and Mash would regularly meet at Manuel’s house and practice together, their little group expanded and they eventually moved into regular jams at Q-Factory." />
        <ASTIText text="Their first shows took place at Tag Out Theater, and they eventually also performed at CREA under Easylaughs." /> */}
      </Box>
    </Box>
  );
}
