import { Menubar } from 'primereact/menubar';
import logo from '../../assets/logo512.png';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

const Menu = ({ ...props }) => {
	const itemTemplate = (item: MenuItem, options: MenuItemOptions) => {
		return (
			<span itemProp='name' role='menuitem'>
				<a
					itemProp='url'
					className={options.className}
					onClick={options.onClick}
					href={item.url}
				>
					<span className={options.labelClassName}>{item.label}</span>
				</a>
			</span>
		);
	};
	const start = (
		<div className='title' itemScope itemType='https://schema.org/HealthClub'>
			<a
				href={`https://${import.meta.env.VITE_META_DOMAINE}`}
				className='accueil'
				title='Cliquez ici pour retourner à la page d’accueil'
			>
				<img
					itemProp='logo'
					alt='le logo du site Massothérapeute énergétique - Marie Cophignon : une fleur de vie'
					src={logo}
					className='logo'
					title='le logo du site Massothérapeute énergétique - Marie Cophignon : une fleur de vie'
					loading='lazy'
				/>
				<span itemProp='name' className='nom-site'>
					{import.meta.env.VITE_META_NAME} - {import.meta.env.VITE_META_TITLE}
				</span>
			</a>
		</div>
	);

	const className = 'm-1';
	const selectedClassName = 'm-1 selected';

	const onClick = (index: string) => {
		window.location.pathname = '/' + index;
	};

	const getClassName = (pathName: string) => {
		pathName = pathName.toLowerCase();
		const windowPathName = window.location.pathname;

		if (windowPathName.includes(pathName)) {
			return selectedClassName;
		}
		if (
			pathName === 'mes-soins' &&
			(windowPathName.includes('massage-assis-methode-eas') ||
				windowPathName.includes('massage-des-5-continents') ||
				windowPathName.includes('reiki'))
		) {
			return selectedClassName;
		}
		return className;
	};

	const items: MenuItem[] = [
		{
			label: 'Mes soins',
			items: [
				{
					label: 'Massage assis méthode EAS®',
					template: (item: MenuItem, options: MenuItemOptions) => {
						return itemTemplate(item, options);
					},
					url: '/massage-assis-methode-eas',
					className: getClassName('massage-assis-methode-eas'),
					command: () => {
						onClick('massage-assis-methode-eas');
					},
				},
				{
					label: 'Massage des 5 Continents',
					template: (item: MenuItem, options: MenuItemOptions) => {
						return itemTemplate(item, options);
					},
					url: '/massage-des-5-continents',
					className: getClassName('massage-des-5-continents'),
					command: () => {
						onClick('massage-des-5-continents');
					},
				},
				{
					label: 'Reiki Usui',
					template: (item: MenuItem, options: MenuItemOptions) => {
						return itemTemplate(item, options);
					},
					url: '/reiki',
					className: getClassName('reiki'),
					command: () => {
						onClick('reiki');
					},
				},
			],
			className: getClassName('mes-soins'),
		},
		{
			label: 'Qui suis-je ?',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/qui-suis-je',
			command: () => {
				onClick('qui-suis-je');
			},
			className: getClassName('qui-suis-je'),
		},
		// {
		// 	label: 'Tarifs et Offres',
		// 	template: (item: MenuItem, options: MenuItemOptions) => {
		// 		return itemTemplate(item, options);
		// 	},
		// 	url: '/offres',
		// 	className: getClassName('offres'),
		// 	command: () => {
		// 		onClick('offres');
		// 	},
		// },
		// {
		// 	label: 'Consultations',
		// 	template: (item: MenuItem, options: MenuItemOptions) => {
		// 		return itemTemplate(item, options);
		// 	},
		// 	url: '/consultations',
		// 	className: getClassName('consultations'),
		// 	command: () => {
		// 		onClick('consultations');
		// 	},
		// },
		{
			label: 'Contact',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/contact',
			className: getClassName('contact'),
			command: () => {
				onClick('contact');
			},
		},
	];

	return <Menubar model={items} {...props} start={start} />;
};

export default Menu;
