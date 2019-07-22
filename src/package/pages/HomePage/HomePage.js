import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchDataIfNeeded} from "./actions";


class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchDataIfNeeded());
    }

    render() {
        const {dataHomePage, isLoading, error} = this.props;

        return (
            <div>
                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    <section>
                        <div>
                            {error ? (
                                <p className="mui--text-danger">Sorry, we had a problem changing your data. Please try
                                    again later.</p>
                            ) : null}
                        </div>

                        <h3 className='content__title'>Your summer festival of must-see tv</h3>
                        <div className='content'>
                            {dataHomePage.items.map((item, index) => {
                                return (
                                    <article className="content__article" key={index}>
                                        <figure>
                                            <img src={item.packshot} alt={item.displayTitle}/>
                                            <figcaption>
                                                <strong className="content__article--title">{item.displayTitle}</strong>
                                                <span className="content__article--text">{item.straplineText}</span>
                                            </figcaption>
                                        </figure>
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                )}
            </div>
        );
    }
}

HomePage.propTypes = {
    dataHomePage: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    const {dataHomePage, isLoading, error} = state.homePageReducer;

    return {
        dataHomePage,
        error,
        isLoading
    };
}


export default connect(mapStateToProps)(HomePage);
