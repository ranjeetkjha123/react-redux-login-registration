import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class ListPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(userActions.listAll());
        console.log('listpage');
    }

    render() {

        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
             <h2>List Of User</h2>
             <ul>
				{
        	this.props.posts &&
          this.props.posts.map((post) =>{
          	return(
            	<li>{post.title}</li>
            )
          })
        }
        </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
  	posts: state.posts
  }
}

const connectedListPage = connect(mapStateToProps)(ListPage);
export { connectedListPage as ListPage };
