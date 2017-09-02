import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import storyboardActions from './actions/storyboardActions';
import Storyboard from './components/Storyboard';
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        width: '100%'
      }
    };
    return (
      <div>
        <div style={styles.container}>
          <Storyboard storyboard={this.props.storyboard} />
          <Toolbar
            storyboard={this.props.storyboard}
            resizeStoryboard={this.props.storyboardActions.resizeStoryboard}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		storyboardActions: bindActionCreators(storyboardActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);