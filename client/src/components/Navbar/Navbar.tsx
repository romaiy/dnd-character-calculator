import { Navbar, createStyles } from '@mantine/core';
import NavbarLinksGroup from './NavbarLinksGroup';

const useStyles = createStyles(() => ({
    navbar: {
        background: '#ffff',
        position: 'sticky',
        top: 0,
        zIndex: 10000,
    },

    header: {
        padding: '40px 32px 0px',
    },

    links: {
        padding: '40px 32px',
    },

    footer: {
        padding: '0px 32px 40px'
    },
}));

const NavbarNested = () => {
  const { classes } = useStyles();

  return (
    <Navbar 
      width={{ base: '300px' }}  
      className={classes.navbar}
      height={'100vh'} 
    >
      <Navbar.Section className={classes.header}>
        dnd-character-calculator
      </Navbar.Section>

      <Navbar.Section grow className={classes.links}>
        <NavbarLinksGroup/>
      </Navbar.Section>
    </Navbar>
    );
};

export default NavbarNested;