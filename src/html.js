import React from "react"

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Delius&display=swap"
            rel="stylesheet"
          ></link>
          {this.props.headComponents}
        </head>
        <body
          style={{
            backgroundColor: "#afd3a9",
            color: "#000",
            margin: 0,
          }}
        >
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
