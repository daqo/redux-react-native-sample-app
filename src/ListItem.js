import React, { Component } from 'react';
import { 
	Text,
	TouchableWithoutFeedback,
	View,
	LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from './actions';

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();	
	}

	renderDescription() {
		if (this.props.expanded) {
			return (
				<CardItem>
					<Text style={{ flex: 1 }}>{this.props.library.description}</Text>
				</CardItem>
			);
		}
	}

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		console.log(this.props);
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardItem>
						<Text style={titleStyle}>{title}</Text>
					</CardItem>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
	}
};

const mapStateToProps = (state, ownProps) => {
	return { expanded: state.selectedLibraryId === ownProps.library.id };
};

export default connect(mapStateToProps, actions)(ListItem);
