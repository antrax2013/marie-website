import { Menubar } from 'primereact/menubar';
import logo from '../../assets/logo512.png';

interface item {
	label: string;
	command: () => void;
	className: string;
	url: string;
}

const Menu = ({ ...props }) => {
	const itemTemplate = (item: item, options: any) => {
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
	const start = <img alt='logo' src={logo} className='logo' />;
	const end = () => {
		switch (process.env.REACT_APP_ACTIVERDV || 0) {
			case '1':
				return (
					<a
						href={process.env.REACT_APP_URLRDV}
						rel='external'
						target={'_blank'}
					>
						Prendre rendez-vous
					</a>
				);
				break;
			case '2':
				return (
					<>
						Prendre rendez-vous :{' '}
						<a
							href={'tel:' + process.env.REACT_APP_META_NUMTEL}
							rel='external'
							target={'_blank'}
						>
							{process.env.REACT_APP_META_NUMTEL}
						</a>
					</>
				);
				break;
			default:
				return <></>;
		}
	};

	const className = 'm-1';
	const selectedClassName = 'm-1 selected';

	const onClick = (index: string) => {
		window.location.pathname = '/' + index;
	};

	const getClassName = (pathName: string) => {
		pathName = pathName.toLowerCase();
		const windowPathName = window.location.pathname
			.replace('/', '')
			.toLowerCase();

		let entries: string[] = [
			'qui-suis-je',
			'massage-assis-methode-eas',
			'reiki',
			'massage-des-5-continents',
			'consultations',
			'offres',
			'contact',
		];

		const exists = entries.indexOf(windowPathName) !== -1;

		if (pathName === windowPathName && exists) {
			return selectedClassName;
		}
		if (pathName === 'qui-suis-je' && !exists) {
			return selectedClassName;
		}
		return className;
	};

	let items: any[] = [
		{
			label: 'Qui suis-je ?',
			template: (item: any, options: any) => {
				return itemTemplate(item, options);
			},
			url: '/qui-suis-je',
			command: () => {
				onClick('qui-suis-je');
			},
			className: getClassName('qui-suis-je'),
		},
		{
			label: 'Massage assis méthode EAS®',
			template: (item: any, options: any) => {
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
			template: (item: any, options: any) => {
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
			template: (item: any, options: any) => {
				return itemTemplate(item, options);
			},
			url: '/reiki',
			className: getClassName('reiki'),
			command: () => {
				onClick('reiki');
			},
		},
		{
			label: 'Tarifs et Offres',
			template: (item: any, options: any) => {
				return itemTemplate(item, options);
			},
			url: '/offres',
			className: getClassName('offres'),
			command: () => {
				onClick('offres');
			},
		},
		{
			label: 'Consultations',
			template: (item: any, options: any) => {
				return itemTemplate(item, options);
			},
			url: '/consultations',
			className: getClassName('consultations'),
			command: () => {
				onClick('consultations');
			},
		},
		{
			label: 'Contact',
			template: (item: any, options: any) => {
				return itemTemplate(item, options);
			},
			url: '/contact',
			className: getClassName('contact'),
			command: () => {
				onClick('contact');
			},
		},
	];

	return <Menubar model={items} {...props} start={start} end={end} />;
};

export default Menu;
