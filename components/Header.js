import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
  static getInitialProps() {
    return {
      href: "/",
      title: "Top"
    }
  }

  render() {
    return (
      <div>
        <Link href={ this.props.href }>
          <a>{ this.props.title }</a>
        </Link>
      </div>
    )
  }
}