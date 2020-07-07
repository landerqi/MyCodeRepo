import React, { Component } from "react"
import "./header.css"
import PropTypes from "prop-types"
import SubHeader from "../../components/sub_header/index.tsx"

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="app-header">
                {this.props.name}
                <SubHeader />
            </div>
        )
    }
}

Header.propTypes = {
    name: PropTypes.string
}

export default Header