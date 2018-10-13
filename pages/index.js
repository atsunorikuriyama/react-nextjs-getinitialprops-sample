import React from 'react'

import Header from '../components/Header'

export default class Index extends React.Component {
  static getInitialProps() {
    return {
      text: "This is top page."
    }
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.text }
      </div>
    )
  }
}