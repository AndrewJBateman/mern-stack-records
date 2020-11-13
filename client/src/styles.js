import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '20px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		color: '#3f51b5',
	},
	image: {
		marginLeft: '15px',
		marginTop: '5px',
		marginBottom: '5px'
	},
	[theme.breakpoints.down('sm')]: {
		mainContainer: {
			flexDirection: "column-reverse"
		}
	}

}));
