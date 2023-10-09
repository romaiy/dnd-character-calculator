import { createStyles, Flex, Stack, Text } from "@mantine/core";
import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppRoutes } from "../../utils/routes";

interface styleProps {
	location: string,
	path: string
}

const useStyles = createStyles((theme, {location, path}: styleProps) => ({
	link: {
		width: '204px',
		borderRadius: '8px',
		padding: '12px 16px',
		transition: 'all 0.2s',
		color: location === path ? '#ffff' : theme.colors.gray[8],
		svg: {
			color:  location === path ? '#ffff' : theme.colors.gray[5],
			transition: 'all 0.2s',
		},
		'&:hover': {
			borderRadius: '8px',
			background: theme.colors.indigo[7],
			color: '#ffff',
			svg: {
				color: '#ffff',
			},
		}
	}
}));

interface LinksProps {
	Icon: React.FC<any>;
	path: string;
	title: string;
	Component: FC<{}>;
}

const NavbarLink = ({Icon: Icon, path, title}: LinksProps) => {
	const location = useLocation();
	const { classes } = useStyles(
    {
      location: location.pathname.split('/')[1], 
      path: path.split('/')[1]
    }
  );

	return (
		<NavLink to={path}>
			<Flex align="center" gap={8} className={classes.link}>
				<Icon stroke="1.5" />
				<Text lh={'24px'} size="md">{title === 'Виды анализа' ? 'Прогнозирование' : title}</Text>
			</Flex>
		</NavLink>
	);
};

const NavbarLinksGroup = () => {

	const links = AppRoutes.map((link) => {
		if (link.title !== 'Главная страница' && link.title !== 'Id') {
			return (
				<NavbarLink
					{...link}
					key={link.title}
				/>
			);
		}
	});

	return (
		<nav id="nav">
			<Stack justify="center" align="center" spacing={8}>
				{links}
			</Stack>
		</nav>
	);
};

export default NavbarLinksGroup;