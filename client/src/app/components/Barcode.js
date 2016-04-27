import React from 'react'
// import JsBarcode from 'jsbarcode'

export default class extends React.Component {
  componentDidMount(){
    JsBarcode("#barcode", this.props.code)
  }
  render() {
    return (
      <canvas id="barcode" />
    )
  }
}